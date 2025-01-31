import { QRCodeCanvas } from "qrcode.react";

const QRCodeGenerator = () => {
  const surveyURL = "http://localhost:3000"; // Endre til riktig URL når nettsiden er hostet

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
      <h2 className="text-xl font-bold mb-4">QR-kode for undersøkelsen</h2>
      <QRCodeCanvas value={surveyURL} size={150} />
      <p className="mt-4 text-gray-700">Scan denne QR-koden for å åpne undersøkelsen.</p>
    </div>
  );
};

export default QRCodeGenerator;
