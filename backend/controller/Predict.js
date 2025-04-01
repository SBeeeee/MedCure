import * as ort from 'onnxruntime-node';  // Import ONNX Runtime
import path from 'path'; // Use path module for better path handling
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// Define __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Function to handle the health score prediction
export const getHealthScore = async (req, res) => {
  try {
    // Extracting input values from the request body
    const { HR, TEMP, SPO2, AVPU, AGE, SEX } = req.body;

    // Validating if all required inputs are present
    if (
      HR === undefined ||
      TEMP === undefined ||
      SPO2 === undefined ||
      AVPU === undefined ||
      AGE === undefined ||
      SEX === undefined
    ) {
      return res.status(400).json({ error: "All input values are required." });
    }

    // Ensure inputs are converted to numbers
    const inputValues = new Float32Array([
      parseFloat(HR), 
      parseFloat(TEMP), 
      parseFloat(SPO2), 
      parseFloat(AVPU), 
      parseFloat(AGE), 
      parseFloat(SEX)
    ]);

    // Resolving the correct path to the ONNX model
    const modelPath = path.resolve(__dirname, '..', 'onnx', 'xgb_healthscore_model.onnx');

    // Load the ONNX model
    const session = await ort.InferenceSession.create(modelPath);

    // Prepare the input data in the required format (float32 array)
    const inputTensor = new ort.Tensor('float32', inputValues, [1, 6]);

    // Create the input map, matching the model's input name
    const feeds = { [session.inputNames[0]]: inputTensor };

    // Run inference
    const results = await session.run(feeds);

    // Extract predicted health score from the results
    const healthScore = results[session.outputNames[0]].data[0];

    // Send the predicted health score in the response
    res.json({ healthScore });
  
  } catch (err) {
    console.error('Error predicting health score:', err);
    res.status(500).json({ error: 'Failed to predict health score. Please try again later.' });
  }
};