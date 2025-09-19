import { useState } from "react";


export function NFCComponent() {

  const [text, setText] = useState("")
  async function onScanClick() {

    console.log("User clicked scan button");

    try {
      // @ts-ignore
      const ndef = new NDEFReader();
      await ndef.scan();
      console.log("> Scan started");

      ndef.addEventListener("readingerror", () => {
        console.log("Argh! Cannot read data from the NFC tag. Try another one?");
      });

      // @ts-ignore
      ndef.addEventListener("reading", ({ message, serialNumber }) => {
        console.log(`> Serial Number: ${serialNumber}`);
        console.log(`> Records: (${message.records.length})`);
        setText(`Serial Number: ${serialNumber}`)
      });
    } catch (error) {
      console.log("Argh! " + error);
    }

  }
  async function onWriteClick() {
    console.log("User clicked write button");

    try {
      // @ts-ignore
      const ndef = new NDEFReader();
      await ndef.write("Hello world!");
      console.log("> Message written");
    } catch (error) {
      console.log("Argh! " + error);
    }
  }

  return (
    <div>
      <h1>NFC Demo</h1>
      <button id="scanButton" onClick={onScanClick}>Scan NFC Tag</button>
      <button id="writeButton" onClick={onWriteClick}>Write to NFC Tag</button>
      <p>TEXT ON TAG: {text}</p>
    </div>
  );
}
