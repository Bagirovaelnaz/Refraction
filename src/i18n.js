import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next) 
  .init({
    resources: {
      en: {
        translation: {
          switchLanguage: "ENG / AZE", 
          categories: "Categories",
          necklaces: "Necklaces",
          earrings: "Earrings",
          bracelets: "Bracelets",
          rings: "Rings",
          about: "About",
          info: "Info",
          contactUs: "Contact Us",
          wishlist: "Wishlist",
          otherPages: "Other Pages",
          login: "Login",
          signup: "Signup",
          notFound: "Not Found",
          home: "Home",
          shop: "Shop",
          favourite: "Favourite",
          bag: "Bag",
          contact: "Contact",
          elegant: "Elegant",
          timeless: "Timeless",
          lowToHigh:"Low to high",
          highToLow:"High to low",
          specialNights: "The earrings for special nights out.",
          newArrivals: "New Arrivals",
          elevateStyle:
            "Elevate your style with our fresh collection. Shop now and find your new favorite pieces!",
          aboutUs: "About Us",
          shopAll: "Shop All",
          dontKnowWhat: "Don’t know what you’re looking for?",
          refractionJewellery:
            "Refraction Jewellery is a New York-based jewellery studio designing and crafting handmade products focused on using and experimenting with glass.",
          stackRing: "Ring Set",
          clearEarrings: "Clear Earrings",
          chainNecklace: "Chain Necklace Silver",
          price: "Price",
          deliberateSimplicity: "Deliberate Simplicity",
          deliberateDescription:
            "The elegance of Deliberate Simplicity lies in its restraint, where the absence of excess allows the true beauty of the design to emerge. It’s not about minimalism for the sake of minimalism, but about refining a concept to its most effective form. It’s about making intentional choices to focus on the essentials, creating an environment or product that is both functional and aesthetically pleasing. This approach leads to designs that are clean, uncluttered, and timeless, emphasizing quality over quantity.",
          values: "Values",
          simple: "Simple",
          simpleDescription:
            "Embracing the beauty of minimalism, this value focuses on removing the unnecessary to reveal the essence. It’s about creating designs.",
          clear: "Clear",
          clearDescription:
            "It involves clear communication, well-defined goals, and the removal of ambiguity to ensure everything is perfectly articulated.",
          elegantValue: "Elegant",
          elegantDescription:
            "Combining grace with sophistication, elegance is a value that elevates the ordinary to the extraordinary.",
          handmade: "Hand-Made",
          handmadeDescription:
            "Valuing craftsmanship and authenticity, this value celebrates the uniqueness and quality of items created by hand.",
          fresh: "Fresh",
          freshDescription:
            "Representing innovation and vitality, freshness is about bringing new ideas and perspectives to the table.",
          madeFromHand: "Made from Hand",
          madeFromHandDescription:
            "These accessories are the embodiment of craftsmanship, each piece carefully created by skilled hands. The process of hand-making ensures that every item carries a distinct personality, characterized by the meticulous attention to detail and the artisan's passion for their craft. The materials are chosen with care, and the techniques passed down through generations, resulting in accessories that are not only beautiful but also rich in history and tradition. Whether it is the subtle texture of a hand-forged bracelet, the intricate patterns on a hand-carved ring, or the delicate stitching on a hand-woven necklace, these pieces exude a sense of warmth and individuality. Made from hand, these accessories offer a blend of authenticity and individuality, ensuring that no two pieces are exactly alike. Whether it is a ring, bracelet, or necklace, the hand-made process imbues each item with a story, making it more than just an accessory—it is a work of art.",
          trustedPartners: "Trusted Partners",
          commonQuestions: "Common Questions",
          title: "Contact",
          description:
            "Reach out to us and we will get back to you within a couple of days. Don’t love forms? Send us an email at hello@refraction.co",
          firstName: "Your first name",
          lastName: "Your last name",
          email: "example@email.com",
          phone: "027 123 1234",
          message: "Your message to us...",
          sendMessage: "Send Message",
          emptyBagMessage:
            "Your bag is currently empty. Let’s add some products!",
          shopNow: "Shop Now",
          total: "Total",
          buyAll: "Buy All",
          enterPaymentDetails: "Enter Payment Details",
          cardNumber: "Card Number",
          expiryDate: "Expiry Date",
          cvc: "CVC",
          confirmPayment: "Confirm Payment",
          paymentSuccessful: "Payment successful! Thank you for your purchase.",
          fillAllFields: "Please fill in all fields.",
          remove: "Remove",

          bagF: {
            emptyBagMessage:
              "Your bag is currently empty. Let’s add some products!",
            shopNow: "Shop Now",
            removeItem: "Remove",
            total: "Total",
            buyAll: "Buy All",
            enterPaymentDetails: "Enter Payment Details",
            cardNumber: "Card Number",
            expiryDate: "Expiry Date",
            cvc: "CVC",
            confirmPayment: "Confirm Payment",
            paymentSuccess: "Payment successful! Thank you for your purchase.",
            fillAllFields: "Please fill in all fields.",
          },
          wishlistL: {
            yourWishlist: "Your Wishlist",
            remove: "Remove",
            addToCart: "Add To Cart",
            clearFavorites: "Clear All Favorites",
            emptyMessage: "No items in your wishlist yet.",
            startShopping: "Start Shopping",
          },
          contactP: {
            title: "Contact",
            description:
              "Reach out to us and we will get back to you within a couple of days. Don’t love forms? Send us an email at hello@refraction.co",
            firstName: "Your first name",
            lastName: "Your last name",
            email: "example@email.com",
            phone: "027 123 1234",
            message: "Your message to us...",
            sendMessage: "Send Message",
          },
          signupL: {
            title: "Sign Up",
            emailPlaceholder: "Email",
            passwordPlaceholder: "Password",
            confirmPasswordPlaceholder: "Confirm Password",
            signUp: "Sign Up",
            signingUp: "Signing Up",
            passwordMismatch: "Passwords do not match.",
            invalidEmail: "Please enter a valid email address.",
            signupFailed: "Signup failed. Please try again.",
            profileError: "An error occurred while creating the profile.",
            haveAccount: "Already have an account?",
            loginLink: "Log In",
            usernamePlaceholder:"Username"
          },
          loginL: {
            title: "Login",
            emailPlaceholder: "Email",
            passwordPlaceholder: "Password",
            login: "Login",
            loggingIn: "Logging in",
            invalidEmail: "Please enter a valid email address.",
            passwordError:
              "Password must be at least 8 characters long and include one letter, one uppercase letter, and one number.",
            loginFailed: "Login failed. Please try again.",
            noAccount: "Don't have an account?",
            signupLink: "Sign Up",
          },  
          thankYou: {
            title: "Thank You!",
            message:
              "Your payment was successful. We appreciate your purchase!",
            goToHome: "Go to Home",
            offers:"Inspirational Choices"
          },
          error: {
            title: "Page Not Found",
            message:
              "The page you are looking for does not exist or has been moved.",
            goToHome: "Go to Home",
          },
          detail: {
            addToCart: "Add to Cart",
            sizeAndFit: "Size and Fit",
            care: "Care",
            returns: "Returns",
            sizeAndFitDescription:
              "Find the perfect size and fit for our accessories with detailed measurements, ensuring a comfortable and flattering look.",
            careDescription:
              "Maintain the beauty of your accessories with our care guidelines, designed to help you keep your pieces looking their best for years to come.",
            returnsDescription:
              "We offer a hassle-free returns process, allowing you to shop with confidence and easily return or exchange items if needed.",
          },

          faq: {
            materials: {
              question: "What materials are used?",
              answer: "We use high-quality metals, glass, and gems.",
            },
            returnPolicy: {
              question: "What is the return policy?",
              answer: "You can return any item within 30 days of purchase.",
            },
            handMade: {
              question: "Are the items handmade?",
              answer: "Yes, all items are handcrafted by skilled artisans.",
            },
            internationalShipping: {
              question: "Do you offer international shipping?",
              answer: "Yes, we ship to over 100 countries worldwide.",
            },
            careTips: {
              question: "How should I care for my jewelry?",
              answer:
                "Avoid exposure to chemicals, and store in a cool, dry place.",
            },
          },
        },
      },
      az: {
        translation: {
          switchLanguage: "ENG / AZE", // Dili dəyişmək üçün düymə
          categories: "Kateqoriyalar",
          necklaces: "Boyunbağılar",
          earrings: "Sırğalar",
          bracelets: "Biləziklər",
          rings: "Üzüklər",
          about: "Haqqımızda",
          info: "Məlumat",
          contactUs: "Bizimlə Əlaqə",
          wishlist: "Arzular Siyahısı",
          otherPages: "Digər Səhifələr",
          login: "Daxil Ol",
          signup: "Qeydiyyatdan Keç",
          notFound: "Tapılmadı",
          home: "Ana Səhifə",
          shop: "Mağaza",
          favourite: "Sevimlilər",
          bag: "Çanta",
          contact: "Əlaqə",
          elegant: "Zərif",
          timeless: "Vaxtsız",
          specialNights: "Xüsusi gecələr üçün sırğalar.",
          newArrivals: "Yeni Gəlişlər",
          elevateStyle:
            "Stilinizi bizim yeni kolleksiyamızla yüksəldin. İndi alış-veriş edin və yeni sevimli parçalarınızı tapın!",
          aboutUs: "Haqqımızda",
          shopAll: "Hamısını Al",
          dontKnowWhat: "Nə axtardığınızı bilmirsiniz?",
          stackRing: "Üzük Seti",
          refractionJewellery:
            "Refraction Jewellery Nyu-Yorkda yerləşən zərgərlik stüdyosudur, şüşədən istifadə və təcrübələr üzərində cəmlənmiş əl istehsalı məhsulların dizaynı və hazırlanmasıdır.",
          clearEarrings: "Kristal Sırğalar",
          chainNecklace: "Gümüş Boyunbağı",
          price: "Qiymət",
          deliberateSimplicity: "Şüurlu Sadəlik",
          deliberateDescription:
            "Şüurlu Sadəliyin gözəlliyi onun təmkinindədir, burada artıq şeylərin olmaması dizaynın həqiqi gözəlliyinin üzə çıxmasına imkan verir. Bu, sadəcə sadəlik üçün minimalizm deyil, konsepsiyanı ən təsirli formaya qədər təkmilləşdirməkdir. Bu, əsas məqamlara diqqət yetirmək üçün düşünülmüş seçimlər etməkdən, həm funksional, həm də estetik cəhətdən xoş olan bir mühit və ya məhsul yaratmaqdan ibarətdir. Bu yanaşma təmiz, tərtibli və vaxtsız dizaynlara, kəmiyyətin üzərində keyfiyyəti vurğulamağa gətirib çıxarır.",
          values: "Dəyərlər",
          simple: "Sadə",
          simpleDescription:
            "Minimalizmin gözəlliyini qəbul edərək, bu dəyər mahiyyəti aşkara çıxarmaq üçün lazımsız şeyləri aradan qaldırmağa yönəlib. Bu, dizaynlar yaratmaq haqqındadır.",
          clear: "Aydın",
          clearDescription:
            "Bu, aydın ünsiyyəti, yaxşı müəyyən edilmiş məqsədləri və hər şeyin mükəmməl şəkildə ifadə olunmasını təmin etmək üçün qeyri-müəyyənliyi aradan qaldırmağı ehtiva edir.",
          elegantValue: "Zərif",
          elegantDescription:
            "Zəriflik adi şeyləri qeyri-adi hala gətirən zərifliyi və sofistikliyi birləşdirən bir dəyərdir.",
          handmade: "Əl İşi",
          handmadeDescription:
            "Sənətkarlığı və orijinallığı qiymətləndirərək, bu dəyər əl işlərinin unikal və keyfiyyətini qeyd edir.",
          fresh: "Təravətli",
          freshDescription:
            "Yenilik və canlılığı təmsil edən təravət yeni ideyalar və baxışları irəli sürmək haqqındadır.",
          madeFromHand: "Əl İşi",
          madeFromHandDescription:
            "Bu aksessuarlar sənətkarlığın təcəssümüdür, hər bir parça bacarıqlı əllər tərəfindən diqqətlə yaradılmışdır. Əl işi prosesi hər bir əşyaya unikal bir şəxsiyyət gətirir, incə detallara diqqət və sənətkarın sənətə olan ehtirasını ifadə edir. Materiallar diqqətlə seçilir və nəsildən-nəsilə ötürülən texnikalar nəticəsində aksesuarlar təkcə gözəl deyil, həm də tarix və ənənə ilə zəngin olur. Əl ilə işlənmiş bilərziklərin incə teksturası, əl ilə oyulmuş üzük üzərindəki mürəkkəb naxışlar və ya əl ilə toxunmuş boyunbağıdakı incə tikişlər fərdi istilik və şəxsiyyət hissini ifadə edir. Əl işi olan bu aksesuarlar orijinallıq və fərdiliyin qarışığını təklif edir, heç bir parçanın tamamilə bir-birinə bənzəməməsini təmin edir. Əl işi prosesi hər bir əşyaya hekayə verir və onu aksessuar deyil, sənət əsəri edir.",
          trustedPartners: "Etibarlı Tərəfdaşlar",
          commonQuestions: "Tez-tez verilən suallar",
          title: "Əlaqə",
          description:
            "Bizimlə əlaqə saxlayın, biz bir neçə gün ərzində sizə geri dönəcəyik. Formları sevmirsiniz? Bizə hello@refraction.co ünvanına e-poçt göndərin.",
          firstName: "Adınız",
          lastName: "Soyadınız",
          email: "nümunə@email.com",
          phone: "027 123 1234",
          message: "Mesajınızı bizə yazın...",
          sendMessage: "Mesajı Göndər",
          lowToHigh:"Azdan çoxa",
          highToLow:"Çoxdan aza",
          contactP: {
            title: "Əlaqə",
            description:
              "Bizimlə əlaqə saxlayın, biz bir neçə gün ərzində sizə geri dönəcəyik. Formları sevmirsiniz? Bizə hello@refraction.co ünvanına e-poçt göndərin.",
            firstName: "Adınız",
            lastName: "Soyadınız",
            email: "example@email.com",
            phone: "027 123 1234",
            message: "Mesajınızı bizə yazın...",
            sendMessage: "Mesajı Göndər",
            emptyBagMessage:
              "Çantanız hazırda boşdur. Gəlin bəzi məhsul əlavə edək!",
            shopNow: "İndi Alış-veriş Et",
            total: "Cəmi",
            buyAll: "Hamısını Al",
            enterPaymentDetails: "Ödəniş Məlumatını Daxil Edin",
            cardNumber: "Kart Nömrəsi",
            expiryDate: "Son İstifadə Tarixi",
            cvc: "CVC",
            confirmPayment: "Ödənişi Təsdiqlə",
            paymentSuccessful:
              "Ödəniş uğurla tamamlandı! Alışınıza görə təşəkkür edirik.",
            fillAllFields: "Zəhmət olmasa bütün sahələri doldurun.",
            remove: "Sil",
          },
          bagF: {
            emptyBagMessage:
              "Çantanız hal-hazırda boşdur. Gəlin bəzilərini əlavə edək!",
            shopNow: "İndi Alış-veriş Edin",
            removeItem: "Sil",
            total: "Cəm",
            buyAll: "Hamısını Al",
            enterPaymentDetails: "Ödəniş Məlumatlarını Daxil Edin",
            cardNumber: "Kart Nömrəsi",
            expiryDate: "Son İstifadə Tarixi",
            cvc: "CVC",
            confirmPayment: "Ödənişi Təsdiqlə",
            paymentSuccess: "Ödəniş uğurla tamamlandı! Təşəkkür edirik!",
            fillAllFields: "Xahiş edirik, bütün sahələri doldurun.",
          },
          signupL: {
            title: "Qeydiyyat",
            emailPlaceholder: "E-poçt",
            passwordPlaceholder: "Şifrə",
            confirmPasswordPlaceholder: "Şifrəni təsdiqləyin",
            signUp: "Qeydiyyat",
            signingUp: "Qeydiyyat edilir",
            passwordMismatch: "Şifrələr uyğun gəlmir.",
            invalidEmail: "Zəhmət olmasa düzgün bir e-poçt ünvanı daxil edin.",
            signupFailed:
              "Qeydiyyat uğursuz oldu. Zəhmət olmasa yenidən cəhd edin.",
            profileError: "Profil yaradılarkən xəta baş verdi.",
            haveAccount: "Artıq hesabınız var?",
            loginLink: "Daxil olun",
            usernamePlaceholder:"İstifadəçi adı"
          },
          error: {
            title: "Səhifə Tapılmadı",
            message: "Axtardığınız səhifə mövcud deyil və ya köçürülüb.",
            goToHome: "Ana səhifəyə keç",
          },
          wishlistL: {
            yourWishlist: "Sizin İstək Siyahınız",
            remove: "Sil",
            addToCart: "Səbətə Əlavə Et",
            clearFavorites: "Bütün Seçimləri Təmizlə",
            emptyMessage: "Sizin istək siyahınız hələ boşdur.",
            startShopping: "Alış-verişə Başlayın",
          },
          detail: {
            addToCart: "Səbətə əlavə et",
            sizeAndFit: "Ölçü və Uyğunluq",
            care: "Baxım",
            returns: "Qaytarma",
            sizeAndFitDescription:
              "Ölçü və uyğunluğunuzu tapın və aksesuarlarımız üçün rahat və cazibədar görünüş təmin edin.",
            careDescription:
              "Aksesuarlarınızın gözəlliyini qorumaq üçün sizə kömək edəcək baxım qaydaları.",
            returnsDescription:
              "Alış-verişinizi asanlıqla qaytarmağınıza və ya dəyişdirməyinizə imkan verən qaytarma prosesimizi təqdim edirik.",
          },
          loginL: {
            title: "Daxil ol",
            emailPlaceholder: "E-poçt",
            passwordPlaceholder: "Şifrə",
            login: "Daxil ol",
            loggingIn: "Daxil olunur",
            invalidEmail: "Zəhmət olmasa düzgün bir e-poçt ünvanı daxil edin.",
            passwordError:
              "Şifrə ən azı 8 simvoldan ibarət olmalı və bir hərf, bir böyük hərf və bir rəqəm daxil etməlidir.",
            loginFailed: "Giriş uğursuz oldu. Zəhmət olmasa yenidən cəhd edin.",
            noAccount: "Hesabınız yoxdur?",
            signupLink: "Qeydiyyatdan keç",
          },
          thankYou: {
            title: "Təşəkkürlər!",
            message:
              "Ödəməniz uğurla başa çatdı. Alış-verişinizi qiymətləndiririk!",
            goToHome: "Ana səhifəyə keç",
            offers:"İlham Verən Seçimlər"
          },
          faq: {
            materials: {
              question: "Hansı materiallar istifadə olunur?",
              answer:
                "Yüksək keyfiyyətli metallar, şüşə və qiymətli daşlar istifadə olunur.",
            },
            returnPolicy: {
              question: "Geri qaytarma siyasətiniz nədir?",
              answer:
                "Hər hansı bir məhsulu alındığı tarixdən etibarən 30 gün ərzində geri qaytara bilərsiniz.",
            },
            handMade: {
              question: "Məhsullar əl işidir?",
              answer:
                "Bəli, bütün məhsullar təcrübəli sənətkarlar tərəfindən əl ilə hazırlanır.",
            },
            internationalShipping: {
              question: "Beynəlxalq çatdırılma təklif edirsiniz?",
              answer: "Bəli, biz dünya üzrə 100-dən çox ölkəyə çatdırırıq.",
            },
            careTips: {
              question: "Zinət əşyalarını necə qorumaq lazımdır?",
              answer:
                "Kimyəvi maddələrdən uzaq saxlayın və sərin, quru yerdə saxlayın.",
            },
          },
        },
      },
    },
    lng: "en", // Default language
    fallbackLng: "az", // Fallback language set to Azerbaijani
    interpolation: {
      escapeValue: false, // Keeps HTML safe for React
    },
  });

export default i18n;
