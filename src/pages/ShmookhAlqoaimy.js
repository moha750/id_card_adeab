import Header from "../comp/memberHeaderGirl";
import Footer from "../comp/memberFooter";
import Nav from "../comp/nav";
import Media from "../comp/Media";

const ShmookhAlqoaimy = () => {
  return (
    
<>
  <Header leader= "لجنة صناعة المحتوى"/>
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
شموخ ابراهيم القعيمي                     
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
221109578
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
            }}>0544995067</h1>
        </span>
      
    </section>
    <section>
      <span className="h2">
        <h2>البريد الإلكتروني</h2>
      </span>
      <span className="h1">
        <h1     style={{
      fontSize: "145%",
      fontFamily: "rb0",
      textAlign: "center",
      color: "white",
      padding: "33px 0px 10px",
    }}>foobp2001@gmail.com</h1>
        </span>
      
    </section>
  </main>
  <Footer/>
  <Nav/>
  <Media/>
</>

  );
}

let list = document.querySelectorAll(".list");
function activeLink() {
  list.forEach(item => item.classList.remove("active"));
  this.classList.add("active");
}
list.forEach(item => item.addEventListener("click", activeLink));

export default ShmookhAlqoaimy;