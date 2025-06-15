
import { Helmet } from "react-helmet-async"; // For SEO Head tags

const VmouAssignment = () => {
  return (
    <div className="font-sans text-gray-800">
      {/* SEO Meta Tags */}
      <Helmet>
        <title>VMOU Handwritten Assignments 2025 | Arvindam Ki Class</title>
        <meta
          name="description"
          content="Download high-quality VMOU handwritten assignments for 2025 at affordable prices. Prepared by experts and delivered to your home."
        />
        <link rel="canonical" href="https://www.arvindamkiclass.in/vmou-assignments" />
        <meta property="og:title" content="VMOU Handwritten Assignments 2025" />
        <meta
          property="og:description"
          content="Expert-prepared VMOU assignments delivered to your doorstep. Order now on WhatsApp!"
        />
        <meta property="og:url" content="https://www.arvindamkiclass.in/vmou-assignments" />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white text-center py-16 px-4">
        <h1 className="text-3xl sm:text-4xl font-bold mb-3">
          VMOU Handwritten Assignments 2025
        </h1>
        <p className="text-lg max-w-2xl mx-auto mb-6">
          Order premium quality, error-free assignments that follow all VMOU rules and formats.
        </p>
        <a
          href="https://wa.me/919351433289"
          className="inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded-md shadow-md hover:bg-gray-100 transition"
        >
          Order via WhatsApp
        </a>
      </section>
      <section className="bg-white py-12 px-4">
  <div className="max-w-4xl mx-auto">
    <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
      VMOU Assignment Handwritten क्यों ज़रूरी हैं?
    </h2>
    <div className="space-y-6 text-lg leading-relaxed text-gray-700">
      <p>
        बहुत सारे विद्यार्थी VMOU Assignment Handwritten खरीदना चाहते हैं क्योंकि उनके पास समय की कमी होती है
     या फिर उन्हें यह नहीं पता होता कि Assignment कैसे बनाना है। VMOU की Assignment लिखने के कुछ नियम होते
        हैं जिन्हें अगर ठीक से Follow नहीं किया गया तो Assignment Reject हो सकती है।
      </p>
      <p>
        अगर आप Working Professional हैं, गृहिणी हैं, या फिर किसी कारण से Assignment को समय पर नहीं बना पा
        रहे हैं, तो VMOU Assignment को ऑर्डर करना आपके लिए बेहतर विकल्प है।
      </p>
      <p>
        हमारी टीम द्वारा बनाई गई Assignment पूर्ण रूप से VMOU के दिशानिर्देशों के अनुसार होती हैं। हम सुनिश्चित
        करते हैं कि हर पृष्ठ साफ-सुथरा और सुंदर लिखावट में हो ताकि आपकी Assignment बेहतर अंक प्राप्त कर सके।
      </p>
    </div>
  </div>
</section>

      {/* Services */}
      <section className="max-w-6xl mx-auto py-12 px-4 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <div className="bg-white border rounded-lg p-6 shadow-sm hover:shadow-lg transition">
          <h2 className="text-xl font-bold mb-2">📈 Expert Work</h2>
          <p>Assignments are written by experienced educators ensuring no mistakes and proper formatting.</p>
        </div>
        <div className="bg-white border rounded-lg p-6 shadow-sm hover:shadow-lg transition">
          <h2 className="text-xl font-bold mb-2">⏰ On-Time Delivery</h2>
          <p>Receive your work within 10 working days via courier/post. Speed & safety assured.</p>
        </div>
        <div className="bg-white border rounded-lg p-6 shadow-sm hover:shadow-lg transition">
          <h2 className="text-xl font-bold mb-2">💰 Fair Pricing</h2>
          <p>Affordable rates from ₹150–₹350 per subject. Refund available within 2 days (delivery charge excluded).</p>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-gray-100 py-12 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Who Should Use This?</h2>
          <ul className="list-disc list-inside text-left text-lg mt-6 space-y-2">
            <li>Busy students or working professionals</li>
            <li>Homemakers pursuing education</li>
            <li>Anyone facing difficulties with handwriting or formatting</li>
            <li>Students without VMOU textbooks or notes</li>
          </ul>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center py-16 bg-white px-4" id="order">
        <h2 className="text-2xl font-bold mb-2">Ready to Order?</h2>
        <p className="text-lg mb-4">Call or WhatsApp us to place your order today!</p>
        <p className="text-xl font-semibold mb-6">📞 +91 93514 33289</p>
        <a
          href="https://wa.me/919351433289"
          className="bg-green-500 text-white px-6 py-3 rounded-md text-lg hover:bg-green-600 transition"
        >
          Chat on WhatsApp
        </a>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 py-6 text-center text-sm text-gray-600">
        <p>
          © {new Date().getFullYear()} Arvindam Ki Class | Powered by VmouPortal.com
        </p>
        <p>
          For more info visit{" "}
          <a href="https://www.vmou.ac.in" className="text-blue-600 hover:underline">
            Official VMOU Website
          </a>
        </p>
      </footer>
    </div>
  );
};

export default VmouAssignment;
