(()=>{"use strict";const t=t=>"object"==typeof t&&null!==t,e=({structuredDataList:t})=>{const e=t.flatMap((t=>{if(!("@type"in t))return[];const e=t["@type"];return"Article"===e||"AdvertiserContentArticle"===e||"NewsArticle"===e||"AnalysisNewsArticle"===e||"AskPublicNewsArticle"===e||"BackgroundNewsArticle"===e||"OpinionNewsArticle"===e||"ReportageNewsArticle"===e||"ReviewNewsArticle"===e||"Report"===e||"SatiricalArticle"===e||"ScholarlyArticle"===e||"MedicalScholarlyArticle"===e||"SocialMediaPosting"===e||"BlogPosting"===e||"LiveBlogPosting"===e||"DiscussionForumPosting"===e||"TechArticle"===e||"APIReference"===e?[t]:[]}));if(!(e.length<1))return e[0]},r=({structuredDataList:t})=>{const e=t.flatMap((t=>{if(!("@type"in t))return[];const e=t["@type"];return"Event"===e||"BusinessEvent"===e||"ChildrensEvent"===e||"ComedyEvent"===e||"CourseInstance"===e||"DanceEvent"===e||"DeliveryEvent"===e||"EducationEvent"===e||"EventSeries"===e||"ExhibitionEvent"===e||"Festival"===e||"FoodEvent"===e||"Hackathon"===e||"LiteraryEvent"===e||"MusicEvent"===e||"PublicationEvent"===e||"BroadcastEvent"===e||"OnDemandEvent"===e||"SaleEvent"===e||"ScreeningEvent"===e||"SocialEvent"===e||"SportsEvent"===e||"TheaterEvent"===e||"UserInteraction"===e||"UserBlocks"===e||"UserCheckins"===e||"UserComments"===e||"UserDownloads"===e||"UserLikes"===e||"UserPageVisits"===e||"UserPlays"===e||"UserPlusOnes"===e||"UserTweets"===e||"VisualArtsEvent"===e?[t]:[]}));if(!(e.length<1))return e[0]},i=({structuredDataList:t})=>{const e=t.flatMap((t=>{if(!("@type"in t))return[];const e=t["@type"];return"Product"===e||"IndividualProduct"===e||"ProductCollection"===e||"ProductGroup"===e||"ProductModel"===e||"SomeProducts"===e||"Vehicle"===e||"BusOrCoach"===e||"Car"===e||"Motorcycle"===e||"MotorizedBicycle"===e?[t]:[]}));if(!(e.length<1))return e[0]},n=({structuredDataList:t})=>{const e=t.flatMap((t=>{if(!("@type"in t))return[];const e=t["@type"];return"LocalBusiness"===e||"AnimalShelter"===e||"ArchiveOrganization"===e||"AutomotiveBusiness"===e||"AutoBodyShop"===e||"AutoDealer"===e||"AutoPartsStore"===e||"AutoRental"===e||"AutoRepair"===e||"AutoWash"===e||"GasStation"===e||"MotorcycleDealer"===e||"MotorcycleRepair"===e||"ChildCare"===e||"Dentist"===e||"DryCleaningOrLaundry"===e||"EmergencyService"===e||"FireStation"===e||"Hospital"===e||"PoliceStation"===e||"EmploymentAgency"===e||"EntertainmentBusiness"===e||"AdultEntertainment"===e||"AmusementPark"===e||"ArtGallery"===e||"Casino"===e||"ComedyClub"===e||"MovieTheater"===e||"NightClub"===e||"FinancialService"===e||"AccountingService"===e||"AutomatedTeller"===e||"BankOrCreditUnion"===e||"InsuranceAgency"===e||"FoodEstablishment"===e||"Bakery"===e||"BarOrPub"===e||"Brewery"===e||"CafeOrCoffeeShop"===e||"Distillery"===e||"FastFoodRestaurant"===e||"IceCreamShop"===e||"Restaurant"===e||"Winery"===e||"GovernmentOffice"===e||"PostOffice"===e||"HealthAndBeautyBusiness"===e||"BeautySalon"===e||"DaySpa"===e||"HairSalon"===e||"HealthClub"===e||"NailSalon"===e||"TattooParlor"===e||"HomeAndConstructionBusiness"===e||"Electrician"===e||"GeneralContractor"===e||"HVACBusiness"===e||"HousePainter"===e||"Locksmith"===e||"MovingCompany"===e||"Plumber"===e||"RoofingContractor"===e||"InternetCafe"===e||"LegalService"===e||"Attorney"===e||"Notary"===e||"Library"===e||"LodgingBusiness"===e||"BedAndBreakfast"===e||"Campground"===e||"Hostel"===e||"Hotel"===e||"Motel"===e||"Resort"===e||"SkiResort"===e||"MedicalBusiness"===e||"CommunityHealth"===e||"Dentist"===e||"Dermatology"===e||"DietNutrition"===e||"Emergency"===e||"Geriatric"===e||"Gynecologic"===e||"MedicalClinic"===e||"CovidTestingFacility"===e||"Midwifery"===e||"Nursing"===e||"Obstetric"===e||"Oncologic"===e||"Optician"===e||"Optometric"===e||"Otolaryngologic"===e||"Pediatric"===e||"Pharmacy"===e||"Physician"===e||"Physiotherapy"===e||"PlasticSurgery"===e||"Podiatric"===e||"PrimaryCare"===e||"Psychiatric"===e||"PublicHealth"===e||"ProfessionalService"===e||"RadioStation"===e||"RealEstateAgent"===e||"RecyclingCenter"===e||"SelfStorage"===e||"ShoppingCenter"===e||"SportsActivityLocation"===e||"BowlingAlley"===e||"ExerciseGym"===e||"GolfCourse"===e||"HealthClub"===e||"PublicSwimmingPool"===e||"SkiResort"===e||"SportsClub"===e||"StadiumOrArena"===e||"TennisComplex"===e||"Store"===e||"AutoPartsStore"===e||"BikeStore"===e||"BookStore"===e||"ClothingStore"===e||"ComputerStore"===e||"ConvenienceStore"===e||"DepartmentStore"===e||"ElectronicsStore"===e||"Florist"===e||"FurnitureStore"===e||"GardenStore"===e||"GroceryStore"===e||"HardwareStore"===e||"HobbyShop"===e||"HomeGoodsStore"===e||"JewelryStore"===e||"LiquorStore"===e||"MensClothingStore"===e||"MobilePhoneStore"===e||"MovieRentalStore"===e||"MusicStore"===e||"OfficeEquipmentStore"===e||"OutletStore"===e||"PawnShop"===e||"PetStore"===e||"ShoeStore"===e||"SportingGoodsStore"===e||"TireShop"===e||"ToyStore"===e||"WholesaleStore"===e||"TelevisionStation"===e||"TouristInformationCenter"===e||"TravelAgency"===e?[t]:[]}));if(!(e.length<1))return e[0]},o=({structuredDataList:t})=>{const e=t.flatMap((t=>{if(!("@type"in t))return[];const e=t["@type"];return"VideoObject"===e||"VideoObjectSnapshot"===e?[t]:[]}));if(!(e.length<1))return e[0]},a=t=>t.replace("http://schema.org/","").replace("https://schema.org/",""),s=t=>("number"==typeof t.latitude||"string"==typeof t.latitude)&&("number"==typeof t.longitude||"string"==typeof t.longitude)&&`[N${t.latitude},E${t.longitude}]`,c=({structuredDataList:t})=>{const e=g();if(e)return e.split("\n").map((t=>`> ${t.trim()}`)).join("\n");const r=document.querySelector('meta[property="og:image" i]'),i=document.querySelector('link[rel="icon" i]'),n=r instanceof HTMLMetaElement&&r.content||f({structuredDataList:t})||i instanceof HTMLLinkElement&&i.href||void 0;return`${[S({structuredDataList:t}),l({structuredDataList:t}),n&&`[${n}#.png]`,`[${location.href}]`,y({structuredDataList:t}),d({structuredDataList:t}),p({structuredDataList:t})].filter((t=>t)).join("\n").split("\n").map((t=>`> ${t}`)).join("\n")}\n\n\n${[m(),u({structuredDataList:t})].filter((t=>t)).join("\n")}`},l=({structuredDataList:t})=>(({structuredDataList:t})=>t.flatMap((t=>"@type"in t&&"BreadcrumbList"===t["@type"]?[t]:[])))({structuredDataList:t}).flatMap((t=>{const{itemListElement:e}=t;return Array.isArray(e)?[[...e].sort(((t,e)=>t.position-e.position)).flatMap((t=>{if(!t)return[];const e=t.item?.name??t.name;return"string"==typeof e?[`[${e}]`]:[]})).join(" > ")]:[]})).join("\n"),u=({structuredDataList:i})=>{const n=r({structuredDataList:i}),o=n?.performer,a=n?.organizer,s=e({structuredDataList:i}),c=s?.author,l=s?.publisher,u=[...new Set([t(o)&&o.name,t(a)&&a.name,t(c)&&c.name,t(l)&&l.name,,...[...document.querySelectorAll('meta[name="author" i], meta[name="creator" i], meta[name="publisher" i]')].flatMap((t=>t instanceof HTMLMetaElement?[t.content]:[])),location.hostname].flatMap((t=>"string"==typeof t?[t]:[])))];return u.length>=1&&`by ${u.map((t=>`[${t}]`)).join(" ")}`},y=({structuredDataList:t})=>{const r=e({structuredDataList:t}),i=r?.dateModified??r?.datePublished;return"string"==typeof i&&i},p=({structuredDataList:t})=>{const n=document.querySelector('meta[name="description" i]'),a=document.querySelector('meta[property="og:description" i]'),s=r({structuredDataList:t})?.description,c=i({structuredDataList:t})?.description,l=o({structuredDataList:t})?.description,u=e({structuredDataList:t})?.headline;return"string"==typeof s&&s||"string"==typeof c&&c||"string"==typeof l&&l||"string"==typeof u&&u||a instanceof HTMLMetaElement&&a.content||n instanceof HTMLMetaElement&&n.content},d=({structuredDataList:e})=>{const c=[],l=r({structuredDataList:e});if(l){const{endDate:e,location:r,offers:i,startDate:n}=l,o=Array.isArray(i)?i[0]:i;c.push([t(r)&&"name"in r&&`at [${r.name}]`,t(r)&&t(r.address)&&A(r.address),t(r)&&r.geo&&"latitude"in r.geo&&s(r.geo),t(r)&&r.url,`${n??""} ~ ${e??""}`,...o?h(o):[]])}const u=n({structuredDataList:e});if(u){const{address:e,geo:r,openingHoursSpecification:i,priceRange:n,telephone:o}=u,l=Array.isArray(i)&&i||t(i)&&[i];c.push([t(e)&&A(e),r&&"latitude"in r&&s(r),...l?l.map((t=>[(t.opens||t.closes)&&`${t.opens??""} ~ ${t.closes??""}`,t.dayOfWeek?.map(a).join(", "),(t.validFrom||t.validThrough)&&`${t.validFrom??""} ~ ${t.validThrough??""}`].filter((t=>t)).join(" "))):[],"string"==typeof n&&n,"string"==typeof o&&o])}const y=i({structuredDataList:e});if(y){const{brand:e,offers:r}=y,i=Array.isArray(r)?r[0]:r;c.push([t(e)&&`[${e.name}] brand`,...i?h(i):[]])}const p=o({structuredDataList:e});if(p){const{duration:e,expires:r,hasPart:i,publication:n,uploadDate:o}=p,a=Array.isArray(i)?i:[];c.push([`${o??""} ~ ${r??""}`,t(n)&&n.isLiveBroadcast&&`Live ${n.startDate??""} ~ ${n.endDate??""}`,"string"==typeof e&&e,...a.map((t=>`${t.name} ${t.startOffset?`${t.startOffset} s`:""} ~ ${t.endOffset?`${t.endOffset} s`:""} ${t.url}`))])}return c.map((t=>t.filter((t=>"string"==typeof t)).join("\n"))).filter((t=>t)).join("\n\n")},m=()=>{const t=document.querySelector('meta[name="keywords" i]');return(t instanceof HTMLMetaElement&&t.content||"").split(",").flatMap((t=>{const e=t.trim();return""===e?[]:[e]})).map(C).join(" ")},g=()=>{const t=getSelection();if(t)return[...Array(t.rangeCount).keys()].map((e=>{const r=t.getRangeAt(e).cloneContents();r.querySelectorAll("a").forEach((t=>{t.textContent&&(t.textContent=t.textContent,t.prepend("["),t.append("]"))})),r.querySelectorAll("img").forEach((t=>{t.src&&t.after(`[${t.src}#.png]`)}));const i=new Range;return i.selectNodeContents(r),i.toString()})).join("").replaceAll(/\n{3,}/g,"\n\n").trim()},f=({structuredDataList:n})=>{const a=r({structuredDataList:n});if(a){const{image:t}=a,e=Array.isArray(t)?t[0]:t;if("string"==typeof e)return e}const s=i({structuredDataList:n});if(s){const{image:t}=s,e=Array.isArray(t)?t[0]:t;if("string"==typeof e)return e}const c=o({structuredDataList:n});if(c){const{thumbnailUrl:t}=c,e=Array.isArray(t)?t[0]:t;if("string"==typeof e)return e}const l=e({structuredDataList:n});if(l){const{image:e,publisher:r}=l,i=Array.isArray(e)?e[0]:e;if("string"==typeof i)return i;const n=t(r)&&t(r.logo)&&r.logo.url;if("string"==typeof n)return n}const u=(({structuredDataList:t})=>{const e=t.flatMap((t=>{if(!("@type"in t))return[];const e=t["@type"];return"Organization"===e||"Airline"===e||"Consortium"===e||"Corporation"===e||"EducationalOrganization"===e||"CollegeOrUniversity"===e||"ElementarySchool"===e||"HighSchool"===e||"MiddleSchool"===e||"Preschool"===e||"School"===e||"FundingScheme"===e||"GovernmentOrganization"===e||"LibrarySystem"===e||"LocalBusiness"===e||"AnimalShelter"===e||"ArchiveOrganization"===e||"AutomotiveBusiness"===e||"AutoBodyShop"===e||"AutoDealer"===e||"AutoPartsStore"===e||"AutoRental"===e||"AutoRepair"===e||"AutoWash"===e||"GasStation"===e||"MotorcycleDealer"===e||"MotorcycleRepair"===e||"ChildCare"===e||"Dentist"===e||"DryCleaningOrLaundry"===e||"EmergencyService"===e||"FireStation"===e||"Hospital"===e||"PoliceStation"===e||"EmploymentAgency"===e||"EntertainmentBusiness"===e||"AdultEntertainment"===e||"AmusementPark"===e||"ArtGallery"===e||"Casino"===e||"ComedyClub"===e||"MovieTheater"===e||"NightClub"===e||"FinancialService"===e||"AccountingService"===e||"AutomatedTeller"===e||"BankOrCreditUnion"===e||"InsuranceAgency"===e||"FoodEstablishment"===e||"Bakery"===e||"BarOrPub"===e||"Brewery"===e||"CafeOrCoffeeShop"===e||"Distillery"===e||"FastFoodRestaurant"===e||"IceCreamShop"===e||"Restaurant"===e||"Winery"===e||"GovernmentOffice"===e||"PostOffice"===e||"HealthAndBeautyBusiness"===e||"BeautySalon"===e||"DaySpa"===e||"HairSalon"===e||"HealthClub"===e||"NailSalon"===e||"TattooParlor"===e||"HomeAndConstructionBusiness"===e||"Electrician"===e||"GeneralContractor"===e||"HVACBusiness"===e||"HousePainter"===e||"Locksmith"===e||"MovingCompany"===e||"Plumber"===e||"RoofingContractor"===e||"InternetCafe"===e||"LegalService"===e||"Attorney"===e||"Notary"===e||"Library"===e||"LodgingBusiness"===e||"BedAndBreakfast"===e||"Campground"===e||"Hostel"===e||"Hotel"===e||"Motel"===e||"Resort"===e||"SkiResort"===e||"MedicalBusiness"===e||"CommunityHealth"===e||"Dentist"===e||"Dermatology"===e||"DietNutrition"===e||"Emergency"===e||"Geriatric"===e||"Gynecologic"===e||"MedicalClinic"===e||"CovidTestingFacility"===e||"Midwifery"===e||"Nursing"===e||"Obstetric"===e||"Oncologic"===e||"Optician"===e||"Optometric"===e||"Otolaryngologic"===e||"Pediatric"===e||"Pharmacy"===e||"Physician"===e||"Physiotherapy"===e||"PlasticSurgery"===e||"Podiatric"===e||"PrimaryCare"===e||"Psychiatric"===e||"PublicHealth"===e||"ProfessionalService"===e||"RadioStation"===e||"RealEstateAgent"===e||"RecyclingCenter"===e||"SelfStorage"===e||"ShoppingCenter"===e||"SportsActivityLocation"===e||"BowlingAlley"===e||"ExerciseGym"===e||"GolfCourse"===e||"HealthClub"===e||"PublicSwimmingPool"===e||"SkiResort"===e||"SportsClub"===e||"StadiumOrArena"===e||"TennisComplex"===e||"Store"===e||"AutoPartsStore"===e||"BikeStore"===e||"BookStore"===e||"ClothingStore"===e||"ComputerStore"===e||"ConvenienceStore"===e||"DepartmentStore"===e||"ElectronicsStore"===e||"Florist"===e||"FurnitureStore"===e||"GardenStore"===e||"GroceryStore"===e||"HardwareStore"===e||"HobbyShop"===e||"HomeGoodsStore"===e||"JewelryStore"===e||"LiquorStore"===e||"MensClothingStore"===e||"MobilePhoneStore"===e||"MovieRentalStore"===e||"MusicStore"===e||"OfficeEquipmentStore"===e||"OutletStore"===e||"PawnShop"===e||"PetStore"===e||"ShoeStore"===e||"SportingGoodsStore"===e||"TireShop"===e||"ToyStore"===e||"WholesaleStore"===e||"TelevisionStation"===e||"TouristInformationCenter"===e||"TravelAgency"===e||"MedicalOrganization"===e||"Dentist"===e||"DiagnosticLab"===e||"Hospital"===e||"MedicalClinic"===e||"Pharmacy"===e||"Physician"===e||"VeterinaryCare"===e||"NGO"===e||"NewsMediaOrganization"===e||"PerformingGroup"===e||"DanceGroup"===e||"MusicGroup"===e||"TheaterGroup"===e||"Project"===e||"FundingAgency"===e||"ResearchProject"===e||"ResearchOrganization"===e||"SportsOrganization"===e||"SportsTeam"===e||"WorkersUnion"===e?[t]:[]}));if(!(e.length<1))return e[0]})({structuredDataList:n});if(u){const{logo:t}=u;if("string"==typeof t)return t}},S=({structuredDataList:t})=>{const a=r({structuredDataList:t})?.name,s=n({structuredDataList:t})?.name,c=i({structuredDataList:t})?.name,l=o({structuredDataList:t})?.name,u=e({structuredDataList:t})?.name;return"string"==typeof a&&a||"string"==typeof s&&s||"string"==typeof c&&c||"string"==typeof l&&l||"string"==typeof u&&u||document.title},h=t=>["price"in t&&("number"==typeof t.price||"string"==typeof t.price)&&`${t.price} ${"string"==typeof t.priceCurrency?t.priceCurrency:""}`,"lowPrice"in t&&("number"==typeof t.lowPrice||"string"==typeof t.lowPrice)&&"string"==typeof t.priceCurrency&&`${t.lowPrice} ${"number"==typeof t.highPrice||"string"==typeof t.highPrice?`~ ${t.highPrice} `:""}${t.priceCurrency}`,"availability"in t&&"string"==typeof t.availability&&a(t.availability),"itemCondition"in t&&"string"==typeof t.itemCondition&&a(t.itemCondition),"offerCount"in t&&"number"==typeof t.offerCount&&`${t.offerCount} left`,"priceValidUntil"in t&&"string"==typeof t.priceValidUntil&&`until ${t.priceValidUntil}`],A=t=>[t.streetAddress,t.addressLocality,t.addressRegion,t.postalCode,t.addressCountry].flatMap((t=>"string"==typeof t?[`[${t}]`]:[])).join(", "),C=t=>`#${t.replaceAll(" ","_")}`;chrome.runtime.onMessage.addListener(((e,r,i)=>{switch(e.type){case"getBookmark":{const e=[...document.querySelectorAll('script[type="application/ld+json" i]')].flatMap((e=>{if(!(e instanceof HTMLScriptElement))return[];try{const r=e.textContent;if(!r)throw new Error("JSON string is empty");const i=JSON.parse(r);return(Array.isArray(i)?i:[i]).flatMap((e=>{return t(r=e)&&["http://schema.org","http://schema.org/","https://schema.org","https://schema.org/"].includes(r["@context"])?[e]:[];var r}))}catch(t){return console.error(t),[]}}));i({body:c({structuredDataList:e}),title:S({structuredDataList:e})});break}}}))})();