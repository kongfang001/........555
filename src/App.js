import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>หลักสูตรประกาศนียบัตรวิชาชีพ พุทธศักราช 2567</h1>
        <nav>
          <ul className="nav-menu">
            <li><a href="#home">หน้าแรก</a></li>
            <li><a href="#overview">ภาพรวมหลักสูตร</a></li>
            <li><a href="#objectives">จุดประสงค์ของหลักสูตร</a></li>
            <li><a href="#structure">โครงสร้างหลักสูตร</a></li>
            <li><a href="#activities">กิจกรรมเสริมหลักสูตร</a></li>
          </ul>
        </nav>
      </header>

      <main className="App-main">
        <section id="home" className="section">
          <h2>ยินดีต้อนรับสู่สาขาเทคโนโลยีสารสนเทศ</h2>
          <p>
            สาขาเทคโนโลยีสารสนเทศมุ่งมั่นพัฒนานักศึกษาให้มีความรู้ความสามารถด้านเทคโนโลยีดิจิทัลและสารสนเทศ 
            พร้อมปลูกฝังคุณธรรมและจริยธรรมที่เหมาะสมในวิชาชีพ.
          </p>
          <blockquote className="philosophy">
            "เทคโนโลยีเพื่อชีวิต จริยธรรมเพื่อสังคม"
          </blockquote>
        </section>

        <section id="general-info" className="section">
          <h2>ข้อมูลทั่วไปของสาขา</h2>
          <p>
            สาขาเทคโนโลยีสารสนเทศเป็นส่วนหนึ่งของกลุ่มอาชีพซอฟต์แวร์และการประยุกต์ 
            ที่เปิดโอกาสให้นักศึกษาพัฒนาทักษะในด้านต่าง ๆ เช่น การพัฒนาเว็บไซต์ การออกแบบแอปพลิเคชัน 
            และการจัดการฐานข้อมูล.
          </p>
        </section>

        <section id="gallery" className="section">
          <h2>ภาพประกอบกิจกรรม</h2>
          <div className="gallery">
            <img src="activity1.jpg" alt="กิจกรรมที่ 1" className="gallery-item" />
            <img src="activity2.jpg" alt="กิจกรรมที่ 2" className="gallery-item" />
            <img src="activity3.jpg" alt="กิจกรรมที่ 3" className="gallery-item" />
          </div>
        </section>

        <section id="overview" className="section">
          <h2>ภาพรวมหลักสูตร</h2>
          <p>
            หลักสูตรนี้พัฒนาขึ้นเพื่อยกระดับการศึกษาวิชาชีพของบุคคลให้สูงขึ้น สอดคล้องกับยุทธศาสตร์ชาติและความต้องการของตลาดแรงงาน.
          </p>
        </section>

        <section id="objectives" className="section">
          <h2>จุดประสงค์ของหลักสูตร</h2>
          <ul>
            <li>พัฒนาทักษะด้านอาชีพและคุณธรรมจริยธรรม</li>
            <li>สร้างความสามารถในการประกอบอาชีพอิสระ</li>
            <li>ส่งเสริมการเรียนรู้ตลอดชีวิต</li>
          </ul>
        </section>

        <section id="structure" className="section">
          <h2>โครงสร้างหลักสูตร</h2>
          <ul>
            <li>หมวดวิชาสมรรถนะแกนกลาง: ไม่น้อยกว่า 20 หน่วยกิต</li>
            <li>หมวดวิชาสมรรถนะวิชาชีพ: ไม่น้อยกว่า 70 หน่วยกิต</li>
            <li>หมวดวิชาเลือกเสรี: ไม่น้อยกว่า 10 หน่วยกิต</li>
          </ul>
        </section>

        <section id="activities" className="section">
          <h2>กิจกรรมเสริมหลักสูตร</h2>
          <p>
            นักศึกษาต้องเข้าร่วมกิจกรรมเสริมหลักสูตร เช่น การฝึกอบรม การทำโครงงาน หรือการทำงานกลุ่ม อย่างน้อย 2 ชั่วโมงต่อสัปดาห์.
          </p>
        </section>
      </main>

      <footer className="App-footer">
        <p>พัฒนาโดย สำนักงานคณะกรรมการการอาชีวศึกษา</p>
      </footer>
    </div>
  );
}

export default App;
