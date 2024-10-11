const Faq = () => {
    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold">What is Diskwala?</h3>
              <p>Diskwala is a cloud storage and file-sharing service designed for seamless digital experience.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">How much storage do I get?</h3>
              <p>Diskwala offers unlimited cloud storage, so you never run out of space.</p>
            </div>
            {/* Add more FAQs as needed */}
          </div>
        </div>
      </section>
    );
  };
  
  export default Faq;
  