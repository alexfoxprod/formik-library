import "./App.css";
import YouTubeForm from "./components/YouTubeForm";
import React from "react";
import { NumericFormat } from "react-number-format";

function App() {
  return (
    <div className="App">
      <YouTubeForm />
      <NumericFormat
        value={43414123.4324}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />

      <NumericFormat
        format="(###) ###-##-##"
        mask="_"
        placeholder="(380) 456-12-32"
      />
    </div>
  );
}

export default App;
