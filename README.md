
# 🩺 Real-Time Health Monitoring Platform

A web app for **real-time health tracking**, **ML-powered health scoring**, and **historical data analysis** — built with **Next.js**, **Express.js**, **MongoDB**, and **Recharts**.

---

## 🔧 Tech Stack

- **Frontend**: Next.js, Recharts.js  
- **Backend**: Express.js, Node.js  
- **Database**: MongoDB  
- **ML Model**: Integrated via `.onnx`  
- **Auth**: JWT-based  
- **Live Data**: Pulled from Google Sheets every 5 seconds

---

## ⚙️ Features

- 📊 **Live Graphs** of health parameters from connected hardware  
- 🤖 **Health Score Generation** using an ML model  
- 📝 **Analysis** with alerts if any vitals are out of range  
- 💾 **Save Data** for doctor review with timestamps  
- 📁 **History Page** with graphs and tables for past records

---

## 🚀 How to Use

1. **Clone the Repo**  
   ```bash
   git clone https://github.com/SBeeeee/MedCure
   ```

2. **Install Dependencies**  
   ```bash
   cd HealthSync && npm install  
   cd ../backend && npm install
   ```

3. **Run the App**  
   - Start the backend: `npx nodemon.js`  
   - Start the frontend: `npm run dev` in the frontend directory

4. **Connect Hardware**  
   Send data to a Google Sheet, and provide the sheet link in backend config

5. **Use the Web Interface**  
   - Log in / Sign up  
   - View real-time graphs  
   - Generate health score & analysis  
   - Save and view health history

---

## 👨‍💻 Contribute

Feel free to fork and create a PR if you'd like to improve or add features. Contributions are welcome!

---
