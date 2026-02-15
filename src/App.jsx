import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import IntroHero from "./components/IntroHero";
import Floating from "./components/Floating";
import Modal from "./components/Modal";
import ProjectSection from "./components/ProjectSection";

function App() {
  // 모달 열고 닫는 기능
  const [isModalOpen, setIsModalOpen] = useState(false);
  function modalOpen() {
    setIsModalOpen(true);
  }
  function modalClose() {
    setIsModalOpen(false);
  }

  return (
    <>
      <Header />
      <main className="subpage">
        <IntroHero />
        <ProjectSection />
      </main>
      <Floating onOpen={modalOpen} />
      <Modal isOpen={isModalOpen} onClose={modalClose} />
      <Footer />
    </>
  );
}

export default App;
