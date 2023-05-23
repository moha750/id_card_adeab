// import Swal from "sweetalert2"
import { auth } from "../firebase/config";
import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { useState } from "react";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MainSignUp = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [hasError, sethasError] = useState(false);

  return (
    <main id="mainSignUp">
      <h1>إنشاء حساب مُشرف</h1>
      <p>:) بعدين تعرف ليه انت قاعد تسجل يـ شطور</p>

      <form>

      {hasError && <h3 style={{color : "white", background: "red",}}>في شي خطأ ي شاطر</h3>}

        <input
          onChange={(eo) => {
            setemail(eo.target.value);
          }}
          type="email"
          name="البريد الإلكتروني"
          placeholder="البريد الإلكتروني"
          required=""
        />
        <input
          onChange={(eo) => {
            setpassword(eo.target.value);
          }}
          type="password"
          name="الرقم السري"
          placeholder="الرقم السري"
          required=""
        />
        <button
          onClick={(eo) => {
            eo.preventDefault();
            createUserWithEmailAndPassword(auth, email, password)
              .then((userCredential) => {
                sendEmailVerification(auth.currentUser)
  .then(() => {
    // Email verification sent!
    // ...
  });
                // Signed in
                const MySwal = withReactContent(Swal)


                MySwal.fire({
                  title: ';)مبروك صرت مُشرف',
                  text: "  وبهالمُناسبة الحلوه جهزت لك هدية رهيببببببة وهي طقم مواعييييييييييين       ",
                  imageUrl: 'https://prod-alawani.snaptec.co//pub/media/catalog/product/cache/d3470a8a7a3ceb0328c354c4622cde6a/b/6/b6237d8dbb06816b1425bd62b09e.jpeg?auto=webp&format=pjpg&width=315&height=315&fit=cover',
                  imageWidth: 300,
                  imageHeight: 250,
                  confirmButtonColor: '#0051B2',
                  
                  confirmButtonText: '     !ياخي والله أنك احسن مُبرمج بالحياه             ' ,
                  backdrop: `
                    rgba(0,0,123,0.4)
                    url("https://i0.wp.com/www.printmag.com/wp-content/uploads/2021/02/4cbe8d_f1ed2800a49649848102c68fc5a66e53mv2.gif?resize=476%2C280&ssl=1")


                  `

                }).then((result) => {
  if (result.isConfirmed) {
    Swal.fire(
      '!اي صح',
      ':)نسيت أقولك أن في رسالة جاتك على الأيميل روح شوفها',
      'success'
    )
  }
})


                // ...
              })
              .catch((error) => {

                const errorMessage = error.message;
                console.log(errorMessage);
                sethasError(true)
                // ..
              });
          }}
        >
          تم، سجلت
        </button>
      </form>
    </main>
  );
};

export default MainSignUp;
