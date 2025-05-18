function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-gray-900 px-4">
      <img 
        src="/ecomind-logo.png" 
        alt="EcoMind Logo" 
        className="w-36 h-36 object-contain my-6"
        style={{ maxWidth: '500px', maxHeight: '500px' }}
      />
      <h1 className="text-4xl font-bold mb-4 text-center">EcoMind’e Hoş Geldiniz</h1>
      <p className="text-lg mb-8 text-center max-w-md">
        Sürdürülebilir dijital dönüşüm yolculuğunuz burada başlıyor. Geleceği birlikte inşa edelim.
      </p>
      <button className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
        Keşfet
      </button>
    </div>
  );
}

export default App;
