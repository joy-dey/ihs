// Targeting Elements for Manipulation
let logo = document.querySelector('.brand-image');
let navToggler = document.querySelector('.nav-toggler');
let navBar = document.querySelector('.navigation');
let togglerIcon = document.querySelector('.toggler-icon');
let quoteHolder = document.querySelector('.quote-card');
let quote = document.querySelector('.quote');
let factsList = document.querySelector('.facts-list');
let citylist = document.querySelector('#cities');

// creating footer
let footer = document.createElement('footer');
// Blood Donation Facts Array
let bloodDonationFacts = [
    'Annually around 112.5 million units of donated blood are collected globally.',
    'According to the World Health Organization (WHO), India suffers from an annual deficit of two million blood units, as only 1% of Indian population donates blood each year',
    'Approximately around 36,000, 7,000 and 10,000 units of red blood cells, platelets and plasma are needed daily.',
    'Red cells, platelets, plasma, and cryoprecipitate are the four types of transfusable products that can be derived from blood.',
    'Separating the whole blood into its various components can allow a single unit of blood to benefit multiple patients, and this process of donating specific components is called Apheresis.',
    'AB+ is the universal recipient of blood, which means ab positive persons can receive blood from any blood group. while O negative is the universal donor, which means o negative persons can donate',
    'Donated platelets must be used within five days and red blood cells must be used within forty two days from the date of collection.',
    'Blood products like plasma and cryoprecipitate are stored in a frozen state and thereby these products can be used for up to one year after collection.',
    'All donated blood products have to be screened for HIV, hepatitis B, hepatitis c and syphilis before transfusion.',
    'Blood transfusions are often used for supportive care in various surgeries. In lower and middle income countries especially they can also be used in the management of pregnancy-related complications, childhood malaria complicated by severe anemia and trauma-related injuries.',
    'Unnecessary transfusions can expose patients to HIV, hepatitis and adverse transfusion reactions.',
    'An estimated 1,000 babies are born with Sickle cell anemia every year; these patients can require multiple blood transfusions all throughout their lives.',
    'Almost 47% of all blood donations are collected from high-income countries. It is estimated that the average blood donation rate in high-income countries is nine times higher than what is collected in lower income countries.',
    'A newborn baby has about one cup of blood in his body.',
    'Giving blood will not decrease your strength.',
    'One pint of blood can save up to three lives.',
    'Red blood cells carry oxygen to the body’s organs and tissues.',
    'Red blood cells live about 120 days in the circulatory system.',
    'Platelets promote blood clotting and give those with leukemia and other cancers a chance to live.',
    'Plasma is a pale yellow mixture of water, proteins and salts.',
    'Plasma, which is 90 percent water, makes up 55 percent of blood volume.',
    'Granulocytes, a type of white blood cell, roll along blood vessel walls in search of bacteria to engulf and destroy.',
    'White cells are the body’s primary defense against infection.',
    'Apheresis is a special kind of blood donation that allows a donor to give specific blood components, such as platelets.',
    'There is no substitute for human blood.'

];
// Randomly Selecting one fact from array
let randomFact = Math.floor(Math.random() * bloodDonationFacts.length);
// Array of Places in Tripura
let cityUnsorted = ['Agartala', 'Dharmanagar', 'Udaipur', 'Kailasahar',
    'Bishalgarh', 'Teliamura', 'Khowai', 'Belonia', 'Melaghar', 'Mohanpur',
    'Ambassa', 'Ranirbazar', 'Santirbazar', 'Kumarghat', 'Sonamura',
    'Panisagar', 'Amarpur', 'Jirania', 'Kamalpur', 'Sabroom',
    'Monu', 'Jampui Hills', 'Bishramganj', 'Khumulwng', 'Abhicharan',
    'Amtali', 'Badharghat', 'Champaknagar', 'Gakulnagar', 'Gandhigram',
    'Hezamara', 'Indranagar', 'Jogendranagar', 'Kunjaban', 'Mandwi', 'Narsingarh',
    'Pratapgarh', 'Uatlok Twithu', 'Kadamtala', 'Churaibari', 'Kurti',
    'Hurua', 'Kameshwar', 'Rangauti', 'Pecharthal', 'Fatikroy', 'Kanchanbari',
    'Nalkata', 'Gachirampara', 'Chailengta', 'Chawmanu', 'Sakhan', 'Kanchanpur',
    'Chebri', 'Shantinagar', 'Sirdukbari', 'Gandacherra', 'Taidu', 'Ampinagar', 'Bampur',
    'Dulumbari', 'Barkathal', 'Konaban', 'Charilam', 'Garji', 'Kathalia', 'Gajaria', 'Bamutia',
    'Noagaon', 'Kutna', 'Takarjala', 'Golaghati', 'Bagma', 'Mohanbhog', 'Palatana', 'Kakraban',
    'Nidaya', 'Hrishyamuk', 'Harina', 'Silachari', 'Kalasi', 'Bagfa', 'Jolaibari', 'Baikhora', 'Manikyanagar',
    'Boxanagar', 'Dhanlekha Kaipeng', 'Abdullapur', 'Baghadahar', 'Bahadurpara', 'Bampurbari', 'Barjala',
    'Belphabari', 'Bhavermura', 'Brajamahanbari', 'Chandrasadhubari', 'Dalgram', 'Damchara', 'Dhanyacharanbari',
    'Dudhpur', 'Gabaichara', 'Gorakapa Kachehri', 'Gunamanipara', 'Hadraibari', 'Halhahli', 'Harirambari', 'Hindubari', 'Hirapur', 'Hriphaw',
    'Kamal Krishnabari', 'Keraninagar', 'Khalyabari', 'Khopaiyapara', 'Lalchara', 'Laogang Bazar', 'Lungthung', 'Mainoraipara',
    'Mairuhabari', 'Maklibari', 'Manoharpur', 'Manpui', 'Manu Bazar', 'Methraipara', 'Mogiyabari', 'Mukhachariduar',
    'Muktasinghpara', 'Murhari', 'Nagraibari', 'Nakraihapara', 'Navanchanarabari', 'Nutan Bazar', 'Palangphabari', 'Phuldungsei',
    'Purba Jorekaran', 'Rabiraipara', 'Radhakishorepur', 'Radhakishorpur', 'Rengdil', 'Rushyabari', 'Sabedabari',
    'Sandrabaj', 'Santinagar', 'Serhmun', 'Sherpur', 'Sibnagar', 'Silua', 'Singura', 'Takirambari', 'Thakurbari', 'Tukkalh', 'Vanghmun', 'Bankumari',
    'Brahmabari', 'Fulkumari', 'Brajapur', 'Tepania', 'Fatikchhara'
];
// Sorting the Places arrray in alphabetical order
let citySorted = cityUnsorted.sort();

// Redirecting to Home Page on clicking logo
logo.addEventListener('click', () => {
        window.location.href = 'index.html';
    })
    // Toggle navigation in Tablet and mobile devices
navToggler.addEventListener('click', () => {
        if (navBar.classList.contains('navigation-show')) {
            navBar.classList.remove('navigation-show');
            togglerIcon.src = 'assets/img/menu-24px.svg';

        } else {
            navBar.classList.add('navigation-show');
            togglerIcon.src = 'assets/img/close-24px.svg';
        }
    })
    // Checking whether body has a specific class to avoid unwanted errors in console
if (document.body.classList.contains('registration-page') || document.body.classList.contains('home-page')) {
    let output = ''
        // Creating an option element for each of the places in the array
    citySorted.forEach((city) => {
            output += `<option>${city}</option>`
        })
        // appending the option element to the datalist
    citylist.innerHTML = output;
}
// Checking whether body has a specific class to avoid unwanted errors in console
if (document.body.classList.contains('facts-page')) {
    // randomly displaying the quotes in the facts page
    quote.innerText = bloodDonationFacts[randomFact];
    let factOutput = '';
    // creating an li element for each of the facts in the array
    bloodDonationFacts.forEach((fact) => {
            factOutput += `<li class="facts">${fact}</li>`;
        })
        // appending the li elements to the ul element
    factsList.innerHTML = factOutput;
}