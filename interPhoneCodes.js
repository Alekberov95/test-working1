<html><head>

  <script src="/shared/jquery.min.js"></script>
  
      <script>
      function set_validator_errors(){
          orderValidator.errorTitle = 'Ispravite sljedeće pogreške'; 
  
          orderValidator.errorNameField = 'Ime'; 
          orderValidator.errorNameMess = 'Unesite svoje ime'; 
          
          orderValidator.errorPhoneField = 'Telefon za komunikaciju'; 
          orderValidator.errorPhoneMess = 'Unesite ispravan telefonski broj'; 
          
          orderValidator.errorAddress = 'Unesite ispravnu adresu'; 
          orderValidator.errorRequired = 'Obavezno polje'; 
          orderValidator.errorMaxLength = 'važeći maksimum {1} znak'; 
          orderValidator.errorMinLength = 'važeći minimum {1} znak'; 
          orderValidator.errorEmailField = 'E-mail';
          orderValidator.errorEmail = 'Navedena je nevažeća adresa e-pošte';
          }
      </script>
      
  <script>
  
  
  window.app = {
      timestamp: parseInt((new Date()).getTime() / 1000),
      jq: jQuery,
      formAction: window.location.href,
      leadToken: '6746f1f8e47546.53791286',
      offers: {"43232":{"id":43232,"country":{"code":"HR","name":"\u0425\u043e\u0440\u0432\u0430\u0442\u0438\u044f"},"price":"39","price2":"78","currency":{"code":"EUR","name":"\u20ac"},"discount":"","delivery_price":"","link":"","product_sku":"","prepaid_info_html":""}},
      currentOffer: {"id":43232,"country":{"code":"HR","name":"\u0425\u043e\u0440\u0432\u0430\u0442\u0438\u044f"},"price":"39","price2":"78","currency":{"code":"EUR","name":"\u20ac"},"discount":"","delivery_price":"","link":"","product_sku":"","prepaid_info_html":""},
      allowedCountries: ["HR"],
      _setOfferId: false,
      streamHid: '',
      showcaseUrl: '',
      disablePhoneMask: Boolean(),
      
      setOffer: function (offerId) {
          if (offerId == this._setOfferId) {
              return ;
          }
          this._setOfferId = offerId;
          if (offerId) {
              var offer = app.offers[offerId];
              var previousOffer = app.currentOffer;
              app.currentOffer = offer;
              var event = this.jq.Event("offerchange");
              event.previousOffer = previousOffer;
              event.currentOffer = app.currentOffer;
              this.jq(document).trigger(event);
              this.updatePage(offer);
          } else {
              $('input[name=country]').val('');
          }
      },
      
      updatePage: function(offer) {
          $('x-newprice').html(offer.price);
          $('x-oldprice').html(offer.price2);
          $('x-currency').html(offer.currency.name);
          $('input[name=offer], select[name=offer]').val(offer.id);
          $('input[name=country]').val(offer.country.code);
      },
  
      blockForm: function() {
          // Блокируем кнопки при отправке формы
          $('input[type=submit]', $(this)).prop( 'disabled', true ).attr( 'disabled', true );
          $('button', $(this)).prop( 'disabled', true ).attr( 'disabled', true );
          app.incompleteOrder.lock = true;
          clearTimeout(app.incompleteOrder.timer);
      },
  
      unblockForm: function() {
          $('input[type=submit]', $(this)).prop( 'disabled', false ).attr( 'disabled', false );
          $('button[type=submit]', $(this)).prop( 'disabled', false ).attr( 'disabled', false );
          app.incompleteOrder.lock = false;
          clearTimeout(app.incompleteOrder.timer);
      }
  
  };
  
  
  </script><script src="/shared/form.validate.js?12"></script>
  <script src="/shared/interPhoneCodes.js"></script>
  <script src="/shared/showcase.js?v=1"></script>
  <script src="/shared/form.incomplete.js?10"></script>
  <script src="/shared/main2.js?17"></script>
  
  
  
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="viewport" content="width=device-width">
    <title class="lt00"> Kupiti Prostovit jeftino. Cijene, recenzije. Narediti Prostovit sada!</title>
    <link rel="icon" href="images/everad_logo.png">
    <!--
    <link rel="stylesheet" type="text/css" href="css/reset.css" media="all">
    <link rel="stylesheet" href="css/everad.css">
    -->
    <link rel="stylesheet" type="text/css" href="style.min.css" media="all">
    
    <link href="css.css" rel="stylesheet">
  
  <script type="text/javascript" src="cdn/js/geo/hr39_eur.js"></script>
  <script type="text/javascript" src="cdn/js/countries.js"></script>
  <script type="text/javascript" src="cdn/js/jquery.js"></script>
  <!--
  <script type="text/javascript" src="cdn/js/ld.js"></script>
  -->
  
  </head>function InterPhoneCodes() {
    this.currentPhoneCode = '';

    // Коды тех стран для которых устанавливаем направление письма по умолчанию в поле ввода телефона 
    this.defaultDirectionCountry = ['MA', 'IQ', 'SA', 'KW', 'TR', 'IR']
}

Object.defineProperty(InterPhoneCodes, 'countriesData', {
    value: [{"name":"Afghanistan (‫افغانستان‬‎)","iso2":"af","dialCode":"93","priority":0,"areaCodes":null},{"name":"Albania (Shqipëri)","iso2":"al","dialCode":"355","priority":0,"areaCodes":null},{"name":"Algeria (‫الجزائر‬‎)","iso2":"dz","dialCode":"213","priority":0,"areaCodes":null},{"name":"American Samoa","iso2":"as","dialCode":"1","priority":5,"areaCodes":["684"]},{"name":"Andorra","iso2":"ad","dialCode":"376","priority":0,"areaCodes":null},{"name":"Angola","iso2":"ao","dialCode":"244","priority":0,"areaCodes":null},{"name":"Anguilla","iso2":"ai","dialCode":"1","priority":6,"areaCodes":["264"]},{"name":"Antigua and Barbuda","iso2":"ag","dialCode":"1","priority":7,"areaCodes":["268"]},{"name":"Argentina","iso2":"ar","dialCode":"54","priority":0,"areaCodes":null},{"name":"Armenia (Հայաստան)","iso2":"am","dialCode":"374","priority":0,"areaCodes":null},{"name":"Aruba","iso2":"aw","dialCode":"297","priority":0,"areaCodes":null},{"name":"Australia","iso2":"au","dialCode":"61","priority":0,"areaCodes":null},{"name":"Austria (Österreich)","iso2":"at","dialCode":"43","priority":0,"areaCodes":null},{"name":"Azerbaijan (Azərbaycan)","iso2":"az","dialCode":"994","priority":0,"areaCodes":null},{"name":"Bahamas","iso2":"bs","dialCode":"1","priority":8,"areaCodes":["242"]},{"name":"Bahrain (‫البحرين‬‎)","iso2":"bh","dialCode":"973","priority":0,"areaCodes":null},{"name":"Bangladesh (বাংলাদেশ)","iso2":"bd","dialCode":"880","priority":0,"areaCodes":null},{"name":"Barbados","iso2":"bb","dialCode":"1","priority":9,"areaCodes":["246"]},{"name":"Belarus (Беларусь)","iso2":"by","dialCode":"375","priority":0,"areaCodes":null},{"name":"Belgium (België)","iso2":"be","dialCode":"32","priority":0,"areaCodes":null},{"name":"Belize","iso2":"bz","dialCode":"501","priority":0,"areaCodes":null},{"name":"Benin (Bénin)","iso2":"bj","dialCode":"229","priority":0,"areaCodes":null},{"name":"Bermuda","iso2":"bm","dialCode":"1","priority":10,"areaCodes":["441"]},{"name":"Bhutan (འབྲུག)","iso2":"bt","dialCode":"975","priority":0,"areaCodes":null},{"name":"Bolivia","iso2":"bo","dialCode":"591","priority":0,"areaCodes":null},{"name":"Bosnia and Herzegovina (Босна и Херцеговина)","iso2":"ba","dialCode":"387","priority":0,"areaCodes":null},{"name":"Botswana","iso2":"bw","dialCode":"267","priority":0,"areaCodes":null},{"name":"Brazil (Brasil)","iso2":"br","dialCode":"55","priority":0,"areaCodes":null},{"name":"British Indian Ocean Territory","iso2":"io","dialCode":"246","priority":0,"areaCodes":null},{"name":"British Virgin Islands","iso2":"vg","dialCode":"1","priority":11,"areaCodes":["284"]},{"name":"Brunei","iso2":"bn","dialCode":"673","priority":0,"areaCodes":null},{"name":"Bulgaria (България)","iso2":"bg","dialCode":"359","priority":0,"areaCodes":null},{"name":"Burkina Faso","iso2":"bf","dialCode":"226","priority":0,"areaCodes":null},{"name":"Burundi (Uburundi)","iso2":"bi","dialCode":"257","priority":0,"areaCodes":null},{"name":"Cambodia (កម្ពុជា)","iso2":"kh","dialCode":"855","priority":0,"areaCodes":null},{"name":"Cameroon (Cameroun)","iso2":"cm","dialCode":"237","priority":0,"areaCodes":null},{"name":"Canada","iso2":"ca","dialCode":"1","priority":1,"areaCodes":["204","226","236","249","250","289","306","343","365","387","403","416","418","431","437","438","450","506","514","519","548","579","581","587","604","613","639","647","672","705","709","742","778","780","782","807","819","825","867","873","902","905"]},{"name":"Cape Verde (Kabu Verdi)","iso2":"cv","dialCode":"238","priority":0,"areaCodes":null},{"name":"Caribbean Netherlands","iso2":"bq","dialCode":"599","priority":1,"areaCodes":["3","4","7"]},{"name":"Cayman Islands","iso2":"ky","dialCode":"1","priority":12,"areaCodes":["345"]},{"name":"Central African Republic (République centrafricaine)","iso2":"cf","dialCode":"236","priority":0,"areaCodes":null},{"name":"Chad (Tchad)","iso2":"td","dialCode":"235","priority":0,"areaCodes":null},{"name":"Chile","iso2":"cl","dialCode":"56","priority":0,"areaCodes":null},{"name":"China (中国)","iso2":"cn","dialCode":"86","priority":0,"areaCodes":null},{"name":"Christmas Island","iso2":"cx","dialCode":"61","priority":2,"areaCodes":null},{"name":"Cocos (Keeling) Islands","iso2":"cc","dialCode":"61","priority":1,"areaCodes":null},{"name":"Colombia","iso2":"co","dialCode":"57","priority":0,"areaCodes":null},{"name":"Comoros (‫جزر القمر‬‎)","iso2":"km","dialCode":"269","priority":0,"areaCodes":null},{"name":"Congo (DRC) (Jamhuri ya Kidemokrasia ya Kongo)","iso2":"cd","dialCode":"243","priority":0,"areaCodes":null},{"name":"Congo (Republic) (Congo-Brazzaville)","iso2":"cg","dialCode":"242","priority":0,"areaCodes":null},{"name":"Cook Islands","iso2":"ck","dialCode":"682","priority":0,"areaCodes":null},{"name":"Costa Rica","iso2":"cr","dialCode":"506","priority":0,"areaCodes":null},{"name":"Côte d’Ivoire","iso2":"ci","dialCode":"225","priority":0,"areaCodes":null},{"name":"Croatia (Hrvatska)","iso2":"hr","dialCode":"385","priority":0,"areaCodes":null},{"name":"Cuba","iso2":"cu","dialCode":"53","priority":0,"areaCodes":null},{"name":"Curaçao","iso2":"cw","dialCode":"599","priority":0,"areaCodes":null},{"name":"Cyprus (Κύπρος)","iso2":"cy","dialCode":"357","priority":0,"areaCodes":null},{"name":"Czech Republic (Česká republika)","iso2":"cz","dialCode":"420","priority":0,"areaCodes":null},{"name":"Denmark (Danmark)","iso2":"dk","dialCode":"45","priority":0,"areaCodes":null},{"name":"Djibouti","iso2":"dj","dialCode":"253","priority":0,"areaCodes":null},{"name":"Dominica","iso2":"dm","dialCode":"1","priority":13,"areaCodes":["767"]},{"name":"Dominican Republic (República Dominicana)","iso2":"do","dialCode":"1","priority":2,"areaCodes":["809","829","849"]},{"name":"Ecuador","iso2":"ec","dialCode":"593","priority":0,"areaCodes":null},{"name":"Egypt (‫مصر‬‎)","iso2":"eg","dialCode":"20","priority":0,"areaCodes":null},{"name":"El Salvador","iso2":"sv","dialCode":"503","priority":0,"areaCodes":null},{"name":"Equatorial Guinea (Guinea Ecuatorial)","iso2":"gq","dialCode":"240","priority":0,"areaCodes":null},{"name":"Eritrea","iso2":"er","dialCode":"291","priority":0,"areaCodes":null},{"name":"Estonia (Eesti)","iso2":"ee","dialCode":"372","priority":0,"areaCodes":null},{"name":"Ethiopia","iso2":"et","dialCode":"251","priority":0,"areaCodes":null},{"name":"Falkland Islands (Islas Malvinas)","iso2":"fk","dialCode":"500","priority":0,"areaCodes":null},{"name":"Faroe Islands (Føroyar)","iso2":"fo","dialCode":"298","priority":0,"areaCodes":null},{"name":"Fiji","iso2":"fj","dialCode":"679","priority":0,"areaCodes":null},{"name":"Finland (Suomi)","iso2":"fi","dialCode":"358","priority":0,"areaCodes":null},{"name":"France","iso2":"fr","dialCode":"33","priority":0,"areaCodes":null},{"name":"French Guiana (Guyane française)","iso2":"gf","dialCode":"594","priority":0,"areaCodes":null},{"name":"French Polynesia (Polynésie française)","iso2":"pf","dialCode":"689","priority":0,"areaCodes":null},{"name":"Gabon","iso2":"ga","dialCode":"241","priority":0,"areaCodes":null},{"name":"Gambia","iso2":"gm","dialCode":"220","priority":0,"areaCodes":null},{"name":"Georgia (საქართველო)","iso2":"ge","dialCode":"995","priority":0,"areaCodes":null},{"name":"Germany (Deutschland)","iso2":"de","dialCode":"49","priority":0,"areaCodes":null},{"name":"Ghana (Gaana)","iso2":"gh","dialCode":"233","priority":0,"areaCodes":null},{"name":"Gibraltar","iso2":"gi","dialCode":"350","priority":0,"areaCodes":null},{"name":"Greece (Ελλάδα)","iso2":"gr","dialCode":"30","priority":0,"areaCodes":null},{"name":"Greenland (Kalaallit Nunaat)","iso2":"gl","dialCode":"299","priority":0,"areaCodes":null},{"name":"Grenada","iso2":"gd","dialCode":"1","priority":14,"areaCodes":["473"]},{"name":"Guadeloupe","iso2":"gp","dialCode":"590","priority":0,"areaCodes":null},{"name":"Guam","iso2":"gu","dialCode":"1","priority":15,"areaCodes":["671"]},{"name":"Guatemala","iso2":"gt","dialCode":"502","priority":0,"areaCodes":null},{"name":"Guernsey","iso2":"gg","dialCode":"44","priority":1,"areaCodes":["1481","7781","7839","7911"]},{"name":"Guinea (Guinée)","iso2":"gn","dialCode":"224","priority":0,"areaCodes":null},{"name":"Guinea-Bissau (Guiné Bissau)","iso2":"gw","dialCode":"245","priority":0,"areaCodes":null},{"name":"Guyana","iso2":"gy","dialCode":"592","priority":0,"areaCodes":null},{"name":"Haiti","iso2":"ht","dialCode":"509","priority":0,"areaCodes":null},{"name":"Honduras","iso2":"hn","dialCode":"504","priority":0,"areaCodes":null},{"name":"Hong Kong (香港)","iso2":"hk","dialCode":"852","priority":0,"areaCodes":null},{"name":"Hungary (Magyarország)","iso2":"hu","dialCode":"36","priority":0,"areaCodes":null},{"name":"Iceland (Ísland)","iso2":"is","dialCode":"354","priority":0,"areaCodes":null},{"name":"India (भारत)","iso2":"in","dialCode":"91","priority":0,"areaCodes":null},{"name":"Indonesia","iso2":"id","dialCode":"62","priority":0,"areaCodes":null},{"name":"Iran (‫ایران‬‎)","iso2":"ir","dialCode":"98","priority":0,"areaCodes":null},{"name":"Iraq (‫العراق‬‎)","iso2":"iq","dialCode":"964","priority":0,"areaCodes":null},{"name":"Ireland","iso2":"ie","dialCode":"353","priority":0,"areaCodes":null},{"name":"Isle of Man","iso2":"im","dialCode":"44","priority":2,"areaCodes":["1624","74576","7524","7924","7624"]},{"name":"Israel (‫ישראל‬‎)","iso2":"il","dialCode":"972","priority":0,"areaCodes":null},{"name":"Italy (Italia)","iso2":"it","dialCode":"39","priority":0,"areaCodes":null},{"name":"Jamaica","iso2":"jm","dialCode":"1","priority":4,"areaCodes":["876","658"]},{"name":"Japan (日本)","iso2":"jp","dialCode":"81","priority":0,"areaCodes":null},{"name":"Jersey","iso2":"je","dialCode":"44","priority":3,"areaCodes":["1534","7509","7700","7797","7829","7937"]},{"name":"Jordan (‫الأردن‬‎)","iso2":"jo","dialCode":"962","priority":0,"areaCodes":null},{"name":"Kazakhstan (Казахстан)","iso2":"kz","dialCode":"7","priority":1,"areaCodes":["33","7"]},{"name":"Kenya","iso2":"ke","dialCode":"254","priority":0,"areaCodes":null},{"name":"Kiribati","iso2":"ki","dialCode":"686","priority":0,"areaCodes":null},{"name":"Kosovo","iso2":"xk","dialCode":"383","priority":0,"areaCodes":null},{"name":"Kuwait (‫الكويت‬‎)","iso2":"kw","dialCode":"965","priority":0,"areaCodes":null},{"name":"Kyrgyzstan (Кыргызстан)","iso2":"kg","dialCode":"996","priority":0,"areaCodes":null},{"name":"Laos (ລາວ)","iso2":"la","dialCode":"856","priority":0,"areaCodes":null},{"name":"Latvia (Latvija)","iso2":"lv","dialCode":"371","priority":0,"areaCodes":null},{"name":"Lebanon (‫لبنان‬‎)","iso2":"lb","dialCode":"961","priority":0,"areaCodes":null},{"name":"Lesotho","iso2":"ls","dialCode":"266","priority":0,"areaCodes":null},{"name":"Liberia","iso2":"lr","dialCode":"231","priority":0,"areaCodes":null},{"name":"Libya (‫ليبيا‬‎)","iso2":"ly","dialCode":"218","priority":0,"areaCodes":null},{"name":"Liechtenstein","iso2":"li","dialCode":"423","priority":0,"areaCodes":null},{"name":"Lithuania (Lietuva)","iso2":"lt","dialCode":"370","priority":0,"areaCodes":null},{"name":"Luxembourg","iso2":"lu","dialCode":"352","priority":0,"areaCodes":null},{"name":"Macau (澳門)","iso2":"mo","dialCode":"853","priority":0,"areaCodes":null},{"name":"Macedonia (FYROM) (Македонија)","iso2":"mk","dialCode":"389","priority":0,"areaCodes":null},{"name":"Madagascar (Madagasikara)","iso2":"mg","dialCode":"261","priority":0,"areaCodes":null},{"name":"Malawi","iso2":"mw","dialCode":"265","priority":0,"areaCodes":null},{"name":"Malaysia","iso2":"my","dialCode":"60","priority":0,"areaCodes":null},{"name":"Maldives","iso2":"mv","dialCode":"960","priority":0,"areaCodes":null},{"name":"Mali","iso2":"ml","dialCode":"223","priority":0,"areaCodes":null},{"name":"Malta","iso2":"mt","dialCode":"356","priority":0,"areaCodes":null},{"name":"Marshall Islands","iso2":"mh","dialCode":"692","priority":0,"areaCodes":null},{"name":"Martinique","iso2":"mq","dialCode":"596","priority":0,"areaCodes":null},{"name":"Mauritania (‫موريتانيا‬‎)","iso2":"mr","dialCode":"222","priority":0,"areaCodes":null},{"name":"Mauritius (Moris)","iso2":"mu","dialCode":"230","priority":0,"areaCodes":null},{"name":"Mayotte","iso2":"yt","dialCode":"262","priority":1,"areaCodes":["269","639"]},{"name":"Mexico (México)","iso2":"mx","dialCode":"52","priority":0,"areaCodes":null},{"name":"Micronesia","iso2":"fm","dialCode":"691","priority":0,"areaCodes":null},{"name":"Moldova (Republica Moldova)","iso2":"md","dialCode":"373","priority":0,"areaCodes":null},{"name":"Monaco","iso2":"mc","dialCode":"377","priority":0,"areaCodes":null},{"name":"Mongolia (Монгол)","iso2":"mn","dialCode":"976","priority":0,"areaCodes":null},{"name":"Montenegro (Crna Gora)","iso2":"me","dialCode":"382","priority":0,"areaCodes":null},{"name":"Montserrat","iso2":"ms","dialCode":"1","priority":16,"areaCodes":["664"]},{"name":"Morocco (‫المغرب‬‎)","iso2":"ma","dialCode":"212","priority":0,"areaCodes":null},{"name":"Mozambique (Moçambique)","iso2":"mz","dialCode":"258","priority":0,"areaCodes":null},{"name":"Myanmar (Burma) (မြန်မာ)","iso2":"mm","dialCode":"95","priority":0,"areaCodes":null},{"name":"Namibia (Namibië)","iso2":"na","dialCode":"264","priority":0,"areaCodes":null},{"name":"Nauru","iso2":"nr","dialCode":"674","priority":0,"areaCodes":null},{"name":"Nepal (नेपाल)","iso2":"np","dialCode":"977","priority":0,"areaCodes":null},{"name":"Netherlands (Nederland)","iso2":"nl","dialCode":"31","priority":0,"areaCodes":null},{"name":"New Caledonia (Nouvelle-Calédonie)","iso2":"nc","dialCode":"687","priority":0,"areaCodes":null},{"name":"New Zealand","iso2":"nz","dialCode":"64","priority":0,"areaCodes":null},{"name":"Nicaragua","iso2":"ni","dialCode":"505","priority":0,"areaCodes":null},{"name":"Niger (Nijar)","iso2":"ne","dialCode":"227","priority":0,"areaCodes":null},{"name":"Nigeria","iso2":"ng","dialCode":"234","priority":0,"areaCodes":null},{"name":"Niue","iso2":"nu","dialCode":"683","priority":0,"areaCodes":null},{"name":"Norfolk Island","iso2":"nf","dialCode":"672","priority":0,"areaCodes":null},{"name":"North Korea (조선 민주주의 인민 공화국)","iso2":"kp","dialCode":"850","priority":0,"areaCodes":null},{"name":"Northern Mariana Islands","iso2":"mp","dialCode":"1","priority":17,"areaCodes":["670"]},{"name":"Norway (Norge)","iso2":"no","dialCode":"47","priority":0,"areaCodes":null},{"name":"Oman (‫عُمان‬‎)","iso2":"om","dialCode":"968","priority":0,"areaCodes":null},{"name":"Pakistan (‫پاکستان‬‎)","iso2":"pk","dialCode":"92","priority":0,"areaCodes":null},{"name":"Palau","iso2":"pw","dialCode":"680","priority":0,"areaCodes":null},{"name":"Palestine (‫فلسطين‬‎)","iso2":"ps","dialCode":"970","priority":0,"areaCodes":null},{"name":"Panama (Panamá)","iso2":"pa","dialCode":"507","priority":0,"areaCodes":null},{"name":"Papua New Guinea","iso2":"pg","dialCode":"675","priority":0,"areaCodes":null},{"name":"Paraguay","iso2":"py","dialCode":"595","priority":0,"areaCodes":null},{"name":"Peru (Perú)","iso2":"pe","dialCode":"51","priority":0,"areaCodes":null},{"name":"Philippines","iso2":"ph","dialCode":"63","priority":0,"areaCodes":null},{"name":"Poland (Polska)","iso2":"pl","dialCode":"48","priority":0,"areaCodes":null},{"name":"Portugal","iso2":"pt","dialCode":"351","priority":0,"areaCodes":null},{"name":"Puerto Rico","iso2":"pr","dialCode":"1","priority":3,"areaCodes":["787","939"]},{"name":"Qatar (‫قطر‬‎)","iso2":"qa","dialCode":"974","priority":0,"areaCodes":null},{"name":"Réunion (La Réunion)","iso2":"re","dialCode":"262","priority":0,"areaCodes":null},{"name":"Romania (România)","iso2":"ro","dialCode":"40","priority":0,"areaCodes":null},{"name":"Russia (Россия)","iso2":"ru","dialCode":"7","priority":0,"areaCodes":null},{"name":"Rwanda","iso2":"rw","dialCode":"250","priority":0,"areaCodes":null},{"name":"Saint Barthélemy","iso2":"bl","dialCode":"590","priority":1,"areaCodes":null},{"name":"Saint Helena","iso2":"sh","dialCode":"290","priority":0,"areaCodes":null},{"name":"Saint Kitts and Nevis","iso2":"kn","dialCode":"1","priority":18,"areaCodes":["869"]},{"name":"Saint Lucia","iso2":"lc","dialCode":"1","priority":19,"areaCodes":["758"]},{"name":"Saint Martin (Saint-Martin (partie française))","iso2":"mf","dialCode":"590","priority":2,"areaCodes":null},{"name":"Saint Pierre and Miquelon (Saint-Pierre-et-Miquelon)","iso2":"pm","dialCode":"508","priority":0,"areaCodes":null},{"name":"Saint Vincent and the Grenadines","iso2":"vc","dialCode":"1","priority":20,"areaCodes":["784"]},{"name":"Samoa","iso2":"ws","dialCode":"685","priority":0,"areaCodes":null},{"name":"San Marino","iso2":"sm","dialCode":"378","priority":0,"areaCodes":null},{"name":"São Tomé and Príncipe (São Tomé e Príncipe)","iso2":"st","dialCode":"239","priority":0,"areaCodes":null},{"name":"Saudi Arabia (‫المملكة العربية السعودية‬‎)","iso2":"sa","dialCode":"966","priority":0,"areaCodes":null},{"name":"Senegal (Sénégal)","iso2":"sn","dialCode":"221","priority":0,"areaCodes":null},{"name":"Serbia (Србија)","iso2":"rs","dialCode":"381","priority":0,"areaCodes":null},{"name":"Seychelles","iso2":"sc","dialCode":"248","priority":0,"areaCodes":null},{"name":"Sierra Leone","iso2":"sl","dialCode":"232","priority":0,"areaCodes":null},{"name":"Singapore","iso2":"sg","dialCode":"65","priority":0,"areaCodes":null},{"name":"Sint Maarten","iso2":"sx","dialCode":"1","priority":21,"areaCodes":["721"]},{"name":"Slovakia (Slovensko)","iso2":"sk","dialCode":"421","priority":0,"areaCodes":null},{"name":"Slovenia (Slovenija)","iso2":"si","dialCode":"386","priority":0,"areaCodes":null},{"name":"Solomon Islands","iso2":"sb","dialCode":"677","priority":0,"areaCodes":null},{"name":"Somalia (Soomaaliya)","iso2":"so","dialCode":"252","priority":0,"areaCodes":null},{"name":"South Africa","iso2":"za","dialCode":"27","priority":0,"areaCodes":null},{"name":"South Korea (대한민국)","iso2":"kr","dialCode":"82","priority":0,"areaCodes":null},{"name":"South Sudan (‫جنوب السودان‬‎)","iso2":"ss","dialCode":"211","priority":0,"areaCodes":null},{"name":"Spain (España)","iso2":"es","dialCode":"34","priority":0,"areaCodes":null},{"name":"Sri Lanka (ශ්‍රී ලංකාව)","iso2":"lk","dialCode":"94","priority":0,"areaCodes":null},{"name":"Sudan (‫السودان‬‎)","iso2":"sd","dialCode":"249","priority":0,"areaCodes":null},{"name":"Suriname","iso2":"sr","dialCode":"597","priority":0,"areaCodes":null},{"name":"Svalbard and Jan Mayen","iso2":"sj","dialCode":"47","priority":1,"areaCodes":["79"]},{"name":"Swaziland","iso2":"sz","dialCode":"268","priority":0,"areaCodes":null},{"name":"Sweden (Sverige)","iso2":"se","dialCode":"46","priority":0,"areaCodes":null},{"name":"Switzerland (Schweiz)","iso2":"ch","dialCode":"41","priority":0,"areaCodes":null},{"name":"Syria (‫سوريا‬‎)","iso2":"sy","dialCode":"963","priority":0,"areaCodes":null},{"name":"Taiwan (台灣)","iso2":"tw","dialCode":"886","priority":0,"areaCodes":null},{"name":"Tajikistan","iso2":"tj","dialCode":"992","priority":0,"areaCodes":null},{"name":"Tanzania","iso2":"tz","dialCode":"255","priority":0,"areaCodes":null},{"name":"Thailand (ไทย)","iso2":"th","dialCode":"66","priority":0,"areaCodes":null},{"name":"Timor-Leste","iso2":"tl","dialCode":"670","priority":0,"areaCodes":null},{"name":"Togo","iso2":"tg","dialCode":"228","priority":0,"areaCodes":null},{"name":"Tokelau","iso2":"tk","dialCode":"690","priority":0,"areaCodes":null},{"name":"Tonga","iso2":"to","dialCode":"676","priority":0,"areaCodes":null},{"name":"Trinidad and Tobago","iso2":"tt","dialCode":"1","priority":22,"areaCodes":["868"]},{"name":"Tunisia (‫تونس‬‎)","iso2":"tn","dialCode":"216","priority":0,"areaCodes":null},{"name":"Turkey (Türkiye)","iso2":"tr","dialCode":"90","priority":0,"areaCodes":null},{"name":"Turkmenistan","iso2":"tm","dialCode":"993","priority":0,"areaCodes":null},{"name":"Turks and Caicos Islands","iso2":"tc","dialCode":"1","priority":23,"areaCodes":["649"]},{"name":"Tuvalu","iso2":"tv","dialCode":"688","priority":0,"areaCodes":null},{"name":"U.S. Virgin Islands","iso2":"vi","dialCode":"1","priority":24,"areaCodes":["340"]},{"name":"Uganda","iso2":"ug","dialCode":"256","priority":0,"areaCodes":null},{"name":"Ukraine (Україна)","iso2":"ua","dialCode":"380","priority":0,"areaCodes":null},{"name":"United Arab Emirates (‫الإمارات العربية المتحدة‬‎)","iso2":"ae","dialCode":"971","priority":0,"areaCodes":null},{"name":"United Kingdom","iso2":"gb","dialCode":"44","priority":0,"areaCodes":null},{"name":"United States","iso2":"us","dialCode":"1","priority":0,"areaCodes":null},{"name":"Uruguay","iso2":"uy","dialCode":"598","priority":0,"areaCodes":null},{"name":"Uzbekistan (Oʻzbekiston)","iso2":"uz","dialCode":"998","priority":0,"areaCodes":null},{"name":"Vanuatu","iso2":"vu","dialCode":"678","priority":0,"areaCodes":null},{"name":"Vatican City (Città del Vaticano)","iso2":"va","dialCode":"39","priority":1,"areaCodes":["06698"]},{"name":"Venezuela","iso2":"ve","dialCode":"58","priority":0,"areaCodes":null},{"name":"Vietnam (Việt Nam)","iso2":"vn","dialCode":"84","priority":0,"areaCodes":null},{"name":"Wallis and Futuna (Wallis-et-Futuna)","iso2":"wf","dialCode":"681","priority":0,"areaCodes":null},{"name":"Western Sahara (‫الصحراء الغربية‬‎)","iso2":"eh","dialCode":"212","priority":1,"areaCodes":["5288","5289"]},{"name":"Yemen (‫اليمن‬‎)","iso2":"ye","dialCode":"967","priority":0,"areaCodes":null},{"name":"Zambia","iso2":"zm","dialCode":"260","priority":0,"areaCodes":null},{"name":"Zimbabwe","iso2":"zw","dialCode":"263","priority":0,"areaCodes":null},{"name":"Åland Islands","iso2":"ax","dialCode":"358","priority":1,"areaCodes":["18"]}]
});

Object.defineProperty(InterPhoneCodes, 'currentPhoneCode', {
    get: function() {
        return this.currentPhoneCode;
    },

    set: function(currentPhoneCode) {
        this.currentPhoneCode = currentPhoneCode;
    }
});

/**
 * Получить телефонный код страны по буквенному коду страны
 *
 * @param {string} iso2 двубуквенный код страны согласно стандарту ISO 3166-1 alpha-2
 * @returns {string} телефонный код страны без знака '+'
 */
InterPhoneCodes.getPhoneCode = function(iso2) {
    iso2 = iso2.toLowerCase();
    var countryData = InterPhoneCodes.countriesData.find(function (country) {
        return country.iso2 === iso2;
    })
    return countryData.dialCode || '';
}

/**
 * Заменить у телефонного номера код страны
 *
 * @param {string} phoneNumber телефонный номер, может быть с '+' или без
 * @param {string} currentPhoneCode текущий телефонный код в номере
 * @param {string} newPhoneCode новый телефонный код
 * @returns {string|null} телефонный номер с новым кодом без знака '+', если телефонный номер
 * начинается не с текущего кода страны, то функция вернет null
 */
InterPhoneCodes.replacePhoneCode = function(phoneNumber, currentPhoneCode, newPhoneCode) {
    phoneNumber = phoneNumber.replace('+', '');
    if (phoneNumber.indexOf(currentPhoneCode) !== 0) {
        return null;
    }
    return newPhoneCode + phoneNumber.slice(currentPhoneCode.length);
}

/**
 * Подставить телефонный код в input
 *
 * @param {object} input DOM-элемент в который будет подставлен телефонный код
 * @param {object} select DOM-элемент при переключении которого будет изменен телефонный код в input
 * @returns {void}
 */
InterPhoneCodes.prototype.countryCodeHandler = function(input, select) {
    var selectedCountry = select.options[select.selectedIndex].dataset.countryCode;

    this.currentPhoneCode = InterPhoneCodes.getPhoneCode(selectedCountry);
    input.placeholder = '+' + this.currentPhoneCode;

    select.addEventListener('change', function() {
        var previousPhoneCode = this.currentPhoneCode;

        selectedCountry = select.options[select.selectedIndex].dataset.countryCode;
        this.currentPhoneCode = InterPhoneCodes.getPhoneCode(selectedCountry);

        input.placeholder = '+' + this.currentPhoneCode;
        if (input.value) {
            var newPhoneNumber = InterPhoneCodes.replacePhoneCode(input.value, previousPhoneCode, this.currentPhoneCode);
            if (newPhoneNumber) {
                input.value = '+' + newPhoneNumber;
            }
        }
    }.bind(this));

    input.addEventListener('focus', function() {
        if (!input.value) {
            input.value = '+' + this.currentPhoneCode;
        }
    }.bind(this));

    input.addEventListener('blur', function() {
        if (!input.value || input.value === '+') {
            input.value = '+' + this.currentPhoneCode;
        }
    }.bind(this));
}

/**
 * Полифил метода find.
 */
// https://tc39.github.io/ecma262/#sec-array.prototype.find
if (!Array.prototype.find) {
    Object.defineProperty(Array.prototype, 'find', {
        value: function(predicate) {
            // 1. Let O be ? ToObject(this value).
            if (this == null) {
                throw new TypeError('"this" is null or not defined');
            }

            var o = Object(this);

            // 2. Let len be ? ToLength(? Get(O, "length")).
            var len = o.length >>> 0;

            // 3. If IsCallable(predicate) is false, throw a TypeError exception.
            if (typeof predicate !== 'function') {
                throw new TypeError('predicate must be a function');
            }

            // 4. If thisArg was supplied, let T be thisArg; else let T be undefined.
            var thisArg = arguments[1];

            // 5. Let k be 0.
            var k = 0;

            // 6. Repeat, while k < len
            while (k < len) {
                // a. Let Pk be ! ToString(k).
                // b. Let kValue be ? Get(O, Pk).
                // c. Let testResult be ToBoolean(? Call(predicate, T, « kValue, k, O »)).
                // d. If testResult is true, return kValue.
                var kValue = o[k];
                if (predicate.call(thisArg, kValue, k, o)) {
                    return kValue;
                }
                // e. Increase k by 1.
                k++;
            }

            // 7. Return undefined.
            return undefined;
        },
        configurable: true,
        writable: true
    });
}
