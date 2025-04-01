const fetchData = async () => {
    try {
      const response = await fetch(
        "https://docs.google.com/spreadsheets/d/1N1L2Z3JwHeHu35IAbSav5EifWD_pBzJI_S6EJ08VBJM/gviz/tq?tqx=out:json"
      );
      const text = await response.text();
      const json = JSON.parse(text.substring(47, text.length - 2));
  
      const rows = json.table.rows;
      const lastRow = rows[rows.length - 1]?.c.map((col) => (col ? col.v : null));
  
      return {
        heartRate: lastRow[1] !== null ? parseFloat(lastRow[1]) : 0, // BPM
        spo2: lastRow[2] !== null ? parseFloat(lastRow[2]) : 0, // SpO2
        ecg: lastRow[3] !== null ? parseFloat(lastRow[3]) : 0, // ECG
        temperature: lastRow[4] !== null ? parseFloat(lastRow[4]) : 0, // Temp
        time: lastRow[0] || "Unknown", // Timestamp
      };
    } catch (error) {
      console.error("Error fetching Google Sheets data:", error);
      return { heartRate: 0, temperature: 0, spo2: 0, ecg: 0, time: "Error" };
    }
  };
  
  export default fetchData;
  