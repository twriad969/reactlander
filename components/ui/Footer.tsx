const Footer = () => {
    return (
      <footer className="py-8 bg-gray-800 text-white">
        <div className="container mx-auto flex justify-between items-center">
          <div className="space-y-2">
            <p>&copy; 2024 Diskwala</p>
            <a href="/terms" className="underline">Terms & Conditions</a>
          </div>
          <div className="flex space-x-4">
            {/* Add payment partner logos here */}
            <img src="/payment-partner1.png" alt="Partner 1" className="h-8" />
            <img src="/payment-partner2.png" alt="Partner 2" className="h-8" />
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  