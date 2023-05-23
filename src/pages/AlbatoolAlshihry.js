import Header from "../comp/memberHeaderGirl";
import Footer from "../comp/memberFooter";
import Nav from "../comp/nav";
import Media from "../comp/Media";

const AlbatoolAlshihry = () => {
  return (
    
<>
  <Header leader= "لجنة التقديم والألقاء"/>
  <main id="members-main">
    <section>
      <span className="h2">
        <h2>الأسم الثلاثي</h2>
      </span>
      <span className="h1">
      <h1
  style={{
    fontSize: "155%",
    fontFamily: "rb0",
    textAlign: "center",
    color: "white",
    padding: "25px 0px 10px"
  }}
>
البتول عبدالعزيز الشهري    
    </h1>

</span>
        
    </section>
    <section>
      <span className="h2">
        <h2>الرقم الأكاديمي</h2>
      </span>
      <span className="h1">
      <h1
    style={{
      fontSize: "166%",
      fontFamily: "rb0",
      textAlign: "center",
      color: "white",
      padding: "25px 0px 10px",
      letterSpacing: 5
    }}
>
2204866469
    </h1>

      </span>
      
    </section>
    <section>
      <span className="h2">
        <h2>رقم الجوال</h2>
      </span>
      <span className="h1">
        <h1
            style={{
              fontSize: "166%",
              fontFamily: "rb0",
              textAlign: "center",
              color: "white",
              padding: "25px 0px 10px",
              letterSpacing: 5
            }}>0555743304</h1>
        </span>
      
    </section>
    <section>
      <span className="h2">
        <h2>البريد الإلكتروني</h2>
      </span>
      <span className="h1">
        <h1     style={{
      fontSize: "140%",
      fontFamily: "rb0",
      textAlign: "center",
      color: "white",
      padding: "33px 0px 10px",
    }}>albatoul447@gmail.com</h1>
        </span>
      
    </section>
  </main>
  <Footer/>
  <Nav/>
  <Media/>
</>

  );
}

export default AlbatoolAlshihry ;