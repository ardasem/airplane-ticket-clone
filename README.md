# Pinsoft - Challenge

Proje 16 component ve 5 sayfadan oluşmaktadır. Componentlerin çoğunda local state'lerini tutulmakta, Kullanıcı verisi, Arama verisi ve seçilen uçuş verisini ise redux üzerinde üç ayrı slice içinde tutulmaktadır. 

Sayfalardaki component dağılımları ise aşağıdaki gibidir.

HomePage
- Header
- Hero (Searchbar Componenti Hero içerisinde çağırılmaktadır.)
- Footer

Available-Flights
- Header
- Breadcrumb Menu
- SearchBar
- Flight Cards
- Footer

Selected Flights
Bu sayfada gördüğünüz her bir section kendi içerisinde ayrı bir component
- Header
- Breadcrumb Menu
- FlightInfoCard
- PriceCard
- PassengerInfoContainer (içerisinde yolcu bilgilerini aratılan sayıya göre alabilmek için PassengerInfoCard renderlıyor.)
- ContactCard
- BillingCard
- InsuranceCard
- Link
- Footer

Payment
- Header
- PaymentCard
- Footer 

# SelectedFlight sayfasındaki formlardan verilerin alınması:

Yolcu verisini farklı componentlerde toplayıp tek bir tuşla redux üzerine dispatch etmek gerektiği için, her bir componentin state'ini tutup, daha sonra o state önce parent component'e iletiliyor, son aşama olarak da redux'a dispatch ediliyor. Containerlar için bir Grandparent - child ilişkisi var, yani veriyi iki defa bir parent component'e yollamak gerekiyor. Bunu gerçek zamanlı yapılabilmek adına da useEffect hook'larını kullandım. Fakat PassengerInfoCard componentinde useEffect, App'i sonsuz döngüye sokuyordu, bu sebeple orada bu hooku kullanamadım.

# Redux üzerinde tutulan veriler

Redux üzerinde veriyi 3 farklı bölümde topladım.

# Arama verisi,
SearchBar üzerinde ara tuşuna basıldığı anda dispatch ediliyor. 

* Uçuşun başlayacağı şehir ve biteceği şehirler
* Kalkış ve varış tarihleri ve yolcu sayısından oluşmakta.

# Seçilen uçuş verisi

AvailableFlight kısmında listelenen uçuşlardan birini seçtiğiniz anda uçuş ile alakalı daha sonra gösterilmesi beklenen verileri dispatch ediyor. 

* Uçuşun başlangıç ve bitiş saatleri,
* Kalkış ve varış havalimanları
* Havayolu
* Kuyruk numarası
* Fiyat ve bilgisi
* Para birimi
* Vergi miktarı
* Hizmet Bedeli
* Kalkış tarihi
* Havayolu Firması Kodu
* Toplam Fiyat

bilgilerini içeriyor.

# Kullanıcı verisi

 Yolcu künyeleri
  - Yolcu numarası
  - İsim
  - Soyisim
  - Cinsiyet
  - Doğum tarihi 
  - Vatandaşlık bilgisi 
  - T.C. Kimlik numarası

  İletişim Bilgileri
   - E-Posta
   - Telefon Numarası
   - E-Bülten tercihi

  Fatura Bilgileri
   - Fatura sahibinin İsmi
   - Soyismi
   - Vatandaşlık Bilgisi
   - T.C. Kimlik Numarası 

   bilgilerini içeriyor.


 # Payment Ekranı
 Bu bölümdeki bilgiler güvenlik açısından hassas oldukları için bu kısmı redux veya local state üzerinde tutmak istemedim bu sebeple sadece Mock-up olarak bıraktım. 















