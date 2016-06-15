/**
 * Function to be called on DOM load
 */
document.addEventListener("DOMContentLoaded", function(event) { 
  searchName();
  detailedClientData(0);
});

/**
 * searchName searches and finds the exact matches
 * found in the client.json
 */
function searchName() {
  var searchTerm = this.value;
  var jsonLen = json.length;
  var searchResultSet = [];
  for (var arrayIdx = 0; arrayIdx < jsonLen; arrayIdx++) {
    var firstName = json[arrayIdx].general.firstName;
    var lastName = json[arrayIdx].general.lastName;
    
   if(searchTerm == "" || searchTerm == undefined) {
      searchResultSet.push(arrayIdx);
    }else if (searchTerm && (searchTerm != "") && (searchTerm != "") && (searchTerm != " ") && 
        (((firstName.toLowerCase() + " " + lastName.toLowerCase()).search(searchTerm.toLowerCase())) > -1) ) {
      searchResultSet.push(arrayIdx);
    }
  }
  if(searchResultSet){
    searchResultNodeCreator(searchResultSet);
    detailedClientData(searchResultSet[0]);
  }
};

/**
 * searchResultNodeCreator creates HTML nodes
 * to be added to populate the results of 
 * matched name in client.JSON
 * 
 * @param result: Takes the result of searchName
 * It's an array of indices 
 */
function searchResultNodeCreator(result) {
  if(result){
    document.getElementById('resultList').innerHTML = '';
    for (var int = 0; int < result.length; int++) {
      var mydiv = document.getElementById("resultList");
      var aTag = document.createElement('a');
      aTag.setAttribute('id', result[int]);
      aTag.setAttribute('class',"list-group-item");
      aTag.addEventListener('click', function(){
        detailedClientData(this.id);
      });
      
      /* Images code -For search result: Causes error in pre-downloading of images  
       * aTag.innerHTML = "<img height='50px' width='50px' src="+ json[result[int]].general.avatar +"/>"+
       *(json[result[int]].general.firstName+" "+json[result[int]].general.lastName); 
       */
      
      aTag.innerHTML = (json[result[int]].general.firstName+" "+json[result[int]].general.lastName);
      aTag.style.display = 'block';
      aTag.style.cursor = 'pointer';
      aTag.style.width = '95.3%';
      aTag.style.margin='3px 0px 2px 19px';
     
      mydiv.appendChild(aTag);
    }
  }
};

/**
 * detailedClientData populates selected client
 * data in a tabular format
 * 
 * @param idx: takes the index of the selected element
 * of the JSON array
 */
function detailedClientData(idx){
  document.getElementById('nameValue').innerHTML = json[idx].general.firstName + " "+ json[idx].general.lastName;
  document.getElementById('companyValue').innerHTML = json[idx].job.company;
  document.getElementById('titleValue').innerHTML = json[idx].job.title;
  document.getElementById('emailValue').innerHTML = json[idx].contact.email;
  document.getElementById('phoneValue').innerHTML = json[idx].contact.phone;
  document.getElementById('addressValue').innerHTML = json[idx].address.street +
    " "+ json[idx].address.city+" "+ json[idx].address.country + " "+ json[idx].address.zipCode;
  document.getElementById('clientImage').src = json[idx].general.avatar;
  if (document.getElementsByClassName('active').length > 0) {
    document.getElementsByClassName('active')[0].setAttribute("class", "list-group-item");
  }
  document.getElementById(idx).setAttribute("class", "list-group-item active");
};

/**
 * Below function clears the detailed client info
 * from the table
 */
function clearDetailedData(){
  document.getElementById('nameValue').innerHTML = "";
  document.getElementById('companyValue').innerHTML = "";
  document.getElementById('titleValue').innerHTML = "";
  document.getElementById('emailValue').innerHTML = "";
  document.getElementById('phoneValue').innerHTML = "";
  document.getElementById('addressValue').innerHTML = "";
  document.getElementById('clientImage').src = "";
};

/**
 * Client JSON
 */
var json = [
            {
              "general": {
                "firstName": "Liana",
                "lastName": "Crooks",
                "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/kevinoh/128.jpg"
              },
              "job": {
                "company": "Ledner, Johnson and Predovic",
                "title": "Investor Functionality Coordinator"
              },
              "contact": {
                "email": "Gerry_Hackett77@gmail.com",
                "phone": "(895) 984-0132"
              },
              "address": {
                "street": "1520 Zemlak Cove",
                "city": "New Devon",
                "zipCode": "42586-7898",
                "country": "Guinea-Bissau"
              }
            },
            {
              "general": {
                "firstName": "Deontae",
                "lastName": "Dare",
                "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/andysolomon/128.jpg"
              },
              "job": {
                "company": "D'Amore, Dicki and Borer",
                "title": "International Applications Consultant"
              },
              "contact": {
                "email": "Kellie.Marvin38@yahoo.com",
                "phone": "1-615-843-3426 x600"
              },
              "address": {
                "street": "65901 Glover Terrace",
                "city": "Alden ton",
                "zipCode": "57744-4248",
                "country": "Kenya"
              }
            },
            {
              "general": {
                "firstName": "Cortez",
                "lastName": "Pacocha",
                "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/holdenweb/128.jpg"
              },
              "job": {
                "company": "McKenzie Group",
                "title": "Forward Branding Developer"
              },
              "contact": {
                "email": "Sage_Wiegand@hotmail.com",
                "phone": "725.583.0926 x0430"
              },
              "address": {
                "street": "376 Reginald Dam",
                "city": "Port Enid fort",
                "zipCode": "51294-8361",
                "country": "Belarus"
              }
            },
            {
              "general": {
                "firstName": "Geoffrey",
                "lastName": "Russel",
                "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/swaplord/128.jpg"
              },
              "job": {
                "company": "Nienow and Sons",
                "title": "Central Intranet Designer"
              },
              "contact": {
                "email": "Daron.Bartoletti9@gmail.com",
                "phone": "646.580.9390"
              },
              "address": {
                "street": "5050 Iva Extensions",
                "city": "Madonna burgh",
                "zipCode": "74470-6362",
                "country": "Fiji"
              }
            },
            {
              "general": {
                "firstName": "Christian",
                "lastName": "Wuckert",
                "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/lowie/128.jpg"
              },
              "job": {
                "company": "Jakubowski Inc",
                "title": "Future Branding Assistant"
              },
              "contact": {
                "email": "Zechariah48@hotmail.com",
                "phone": "555-516-5564"
              },
              "address": {
                "street": "1946 Nolan Mountain",
                "city": "Garnet stad",
                "zipCode": "79438",
                "country": "Puerto Rico"
              }
            },
            {
              "general": {
                "firstName": "Joana",
                "lastName": "Breitenberg",
                "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/themrdave/128.jpg"
              },
              "job": {
                "company": "Jacobson - Fay",
                "title": "Global Factors Officer"
              },
              "contact": {
                "email": "Jaylon92@hotmail.com",
                "phone": "202.387.0215 x7568"
              },
              "address": {
                "street": "3446 Isabelle Shore",
                "city": "Port Kayli",
                "zipCode": "63713-9923",
                "country": "Switzerland"
              }
            },
            {
              "general": {
                "firstName": "Elton",
                "lastName": "Pfannerstill",
                "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/abdots/128.jpg"
              },
              "job": {
                "company": "Franecki LLC",
                "title": "Product Applications Assistant"
              },
              "contact": {
                "email": "Tomasa26@hotmail.com",
                "phone": "168.457.7936 x4319"
              },
              "address": {
                "street": "1975 Creola Streets",
                "city": "South Favian",
                "zipCode": "65666-6266",
                "country": "Afghanistan"
              }
            },
            {
              "general": {
                "firstName": "Alvena",
                "lastName": "Paucek",
                "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/dvdwinden/128.jpg"
              },
              "job": {
                "company": "Goldner - Haag",
                "title": "Corporate Interactions Assistant"
              },
              "contact": {
                "email": "Oran66@yahoo.com",
                "phone": "(754) 491-0343 x6060"
              },
              "address": {
                "street": "95820 Bud Trail",
                "city": "West Randy furt",
                "zipCode": "98923",
                "country": "French Polynesia"
              }
            },
            {
              "general": {
                "firstName": "Lew",
                "lastName": "Daniel",
                "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/dhoot_amit/128.jpg"
              },
              "job": {
                "company": "Corwin LLC",
                "title": "Product Research Liason"
              },
              "contact": {
                "email": "Cordelia.Bartoletti28@gmail.com",
                "phone": "142.115.7141 x943"
              },
              "address": {
                "street": "04363 Torphy Club",
                "city": "East Heidi",
                "zipCode": "10926-2413",
                "country": "Estonia"
              }
            },
            {
              "general": {
                "firstName": "Darlene",
                "lastName": "Davis",
                "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/raphaelnikson/128.jpg"
              },
              "job": {
                "company": "Franecki and Sons",
                "title": "Internal Functionality Supervisor"
              },
              "contact": {
                "email": "Erich36@gmail.com",
                "phone": "(546) 314-2504"
              },
              "address": {
                "street": "1513 Kessler Crossing",
                "city": "South Randi fort",
                "zipCode": "60194",
                "country": "Malta"
              }
            },
            {
              "general": {
                "firstName": "Savannah",
                "lastName": "Predovic",
                "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/mtolokonnikov/128.jpg"
              },
              "job": {
                "company": "O'Connell - Koepp",
                "title": "International Integration Liason"
              },
              "contact": {
                "email": "Torey_Stroman@hotmail.com",
                "phone": "324.808.6122"
              },
              "address": {
                "street": "660 Lueilwitz Island",
                "city": "East Okey port",
                "zipCode": "26277",
                "country": "Sudan"
              }
            },
            {
              "general": {
                "firstName": "Nicolette",
                "lastName": "Rogahn",
                "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/oskarlevinson/128.jpg"
              },
              "job": {
                "company": "Zemlak - Larkin",
                "title": "Internal Group Agent"
              },
              "contact": {
                "email": "Rowena.Kemmer93@yahoo.com",
                "phone": "579-666-9685"
              },
              "address": {
                "street": "6622 Kaitlin Drive",
                "city": "New Israel",
                "zipCode": "07116",
                "country": "Turkmenistan"
              }
            },
            {
              "general": {
                "firstName": "Aidan",
                "lastName": "Stracke",
                "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/falconerie/128.jpg"
              },
              "job": {
                "company": "Denesik, Dicki and Schmitt",
                "title": "National Accounts Officer"
              },
              "contact": {
                "email": "Chelsey.Powlowski38@hotmail.com",
                "phone": "689.859.2512 x81508"
              },
              "address": {
                "street": "498 King Track",
                "city": "Toy fort",
                "zipCode": "07905-5925",
                "country": "Latvia"
              }
            },
            {
              "general": {
                "firstName": "Tristin",
                "lastName": "Eichmann",
                "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/johnriordan/128.jpg"
              },
              "job": {
                "company": "Marvin, Pfannerstill and Braun",
                "title": "Central Communications Consultant"
              },
              "contact": {
                "email": "Marisa_Miller54@yahoo.com",
                "phone": "335-788-4534"
              },
              "address": {
                "street": "2686 Ebert Parks",
                "city": "West Lexus",
                "zipCode": "70293-4149",
                "country": "Brazil"
              }
            },
            {
              "general": {
                "firstName": "Malika",
                "lastName": "Feeney",
                "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/dnirmal/128.jpg"
              },
              "job": {
                "company": "Pfannerstill - Christiansen",
                "title": "Customer Assurance Designer"
              },
              "contact": {
                "email": "Stone15@yahoo.com",
                "phone": "578-268-2680 x495"
              },
              "address": {
                "street": "415 Homenick Lodge",
                "city": "North Nelson borough",
                "zipCode": "05142",
                "country": "Netherlands"
              }
            },
            {
              "general": {
                "firstName": "Ross",
                "lastName": "Dickens",
                "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/kuldarkalvik/128.jpg"
              },
              "job": {
                "company": "Champlin, Leannon and O'Connell",
                "title": "Legacy Marketing Coordinator"
              },
              "contact": {
                "email": "Scottie.Swift@hotmail.com",
                "phone": "165-084-3752 x336"
              },
              "address": {
                "street": "98494 Clemens Oval",
                "city": "Heller view",
                "zipCode": "58090",
                "country": "Mozambique"
              }
            },
            {
              "general": {
                "firstName": "Granville",
                "lastName": "Larson",
                "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/gregkilian/128.jpg"
              },
              "job": {
                "company": "Metz - Bashirian",
                "title": "Senior Brand Associate"
              },
              "contact": {
                "email": "Judd6@hotmail.com",
                "phone": "1-817-435-1136 x8014"
              },
              "address": {
                "street": "357 Jeffrey Avenue",
                "city": "Hand side",
                "zipCode": "89647-5238",
                "country": "Morocco"
              }
            },
            {
              "general": {
                "firstName": "Donnie",
                "lastName": "Macejkovic",
                "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/guiiipontes/128.jpg"
              },
              "job": {
                "company": "Schmeler - Romaguera",
                "title": "Senior Functionality Facilitator"
              },
              "contact": {
                "email": "Camryn_Gerhold@hotmail.com",
                "phone": "(186) 005-2043"
              },
              "address": {
                "street": "76139 Hayes Plaza",
                "city": "Emard stad",
                "zipCode": "45180",
                "country": "Western Sahara"
              }
            },
            {
              "general": {
                "firstName": "Estell",
                "lastName": "Baumbach",
                "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/janpalounek/128.jpg"
              },
              "job": {
                "company": "Kuphal - Renner",
                "title": "Principal Mobility Associate"
              },
              "contact": {
                "email": "Cassie_Brekke@yahoo.com",
                "phone": "1-354-996-2400 x08787"
              },
              "address": {
                "street": "64955 Ottilie Port",
                "city": "Bartell mouth",
                "zipCode": "62822-8781",
                "country": "Belgium"
              }
            },
            {
              "general": {
                "firstName": "Amelie",
                "lastName": "Bradtke",
                "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/vanchesz/128.jpg"
              },
              "job": {
                "company": "Swift LLC",
                "title": "Dynamic Program Representative"
              },
              "contact": {
                "email": "Prudence.Hane49@yahoo.com",
                "phone": "699-872-8424"
              },
              "address": {
                "street": "198 White Isle",
                "city": "Breitenberg land",
                "zipCode": "02161",
                "country": "Montserrat"
              }
            },
            {
              "general": {
                "firstName": "Elmer",
                "lastName": "D'Amore",
                "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/mfacchinello/128.jpg"
              },
              "job": {
                "company": "Schaden Group",
                "title": "Regional Brand Strategist"
              },
              "contact": {
                "email": "Margarett57@gmail.com",
                "phone": "1-236-341-6098 x2838"
              },
              "address": {
                "street": "26952 Welch Course",
                "city": "Lake Carmella land",
                "zipCode": "85577-5136",
                "country": "Israel"
              }
            }
          ];


