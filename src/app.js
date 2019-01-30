import { http } from './http';
import { ui } from './ui';
import serverAddy from './config';


// Get clients on DOM load
document.addEventListener('DOMContentLoaded', getClients);

// Gets Clients from API using Get Request
function getClients(){
    http.get(serverAddy + '/api/oec/')
    .then(data => ui.showClients(data))
    .catch(err => console.log(err))
}

//SEARCH 
    document.querySelector('#search-Submit').addEventListener('click', searchOEC)

function searchOEC(){

    const searchClientInput = document.querySelector('#search-client').value;
    const searchTypeOfClientInput = document.querySelector('#search-typeOfClient').value;
    const webAddress = serverAddy + '/api/oec/search/' 
    let queryString = `search?typeOfClient=${searchTypeOfClientInput}&clientCompanyName=${searchClientInput}`
    let finalOutput = webAddress + queryString
    http.get(finalOutput)
        .then(data => ui.showClients(data))
        .catch(err => console.log(err))


}

// Listen for delete
document.querySelector('#contract').addEventListener('click',deleteCard);

//Listen for edit
document.querySelector('#contract').addEventListener('click',enableEdit)


document.getElementById('type-of-client').addEventListener('change', contractSort); //Shows parts of form
document.querySelector('#submit-it').addEventListener('click', submitButtonPush); //UPDATE THIS
document.getElementById('new-contract-btn').addEventListener('click',newContractBtn);
document.getElementById('load-contract-btn').addEventListener('click',loadContractsBtn);
document.getElementById('weekend-schedule-btn').addEventListener('click', weekendScheduleBtn);



// Hide parts of UI
const forms = document.querySelectorAll('div.big-form-input');
const contracts = document.querySelector('div.load-contracts');
const weekendPart = document.querySelector('div#weekend-schedule');
const scheduleSubmit = document.querySelector('div.calendar-submit')

function submitButtonPush() {
  submitPost()
  ui.clearForm()
  getClients()
  hideMainForms()
  getClients()
  loadContractsBtn();  
}


// Sections
        function hideSection(section){
            section.classList.add('collapse');
        };


function submitPost() {
    //Contract Info
        const soldByPerson = document.querySelector('#sold-by').value;
        const typeOfClient = document.querySelector('#type-of-client').value;
        const clientCompanyName = document.querySelector('#client').value;
        const clientPersonName = document.querySelector('#contact-name').value;
        const clientPersonTitle = document.querySelector('#contact-title').value;
        const clientPhone = document.querySelector('#contact-phone').value;
        const clientEmail = document.querySelector('#contact-email').value;
        const copyright = document.querySelector('input[name="copyright-license"]:checked').value;
        const contractSignDate = document.querySelector('#contract-sign-date').value;
        const contractStartDate = document.querySelector('#contract-start').value;
        const contractEndDate = document.querySelector('#contract-end').value;
        const airDatesTimes = document.querySelector('#air-dates-times').value;
        const contractAdditionalInfo = document.querySelector('#additional-info').value;

        // Web OTT Indentification
        const webCategory = document.querySelector('#web-category').value;
        const selectVideoOnDemand = document.querySelector('input[name="svod-gallery"]:checked').value;

        // Store Duplication FTP
        const persmissionToSell = document.querySelector('input[name="sell-permission"]:checked').value;
        const placeInStore = document.querySelector('input[name="pcn-store-permission"]:checked').value;
        const compSelection = document.querySelector('input[name="comps"]:checked').value;
        const compFormat = document.querySelector('#comp-format').value;
        const fTPInstructions = document.querySelector('input[name="ftp-instructions"]:checked').value;
        const compDueDate = document.querySelector('#comp-due-date').value;
        const compNumbersPerEpisode = document.querySelector('#comp-per-episode').value;
        const compGraphicDesign = document.querySelector('input[name="comp-design"]:checked').value;
        const compAdditionalInfo = document.querySelector('#additional-comp').value;

        // Social Media
        const socialMediaPermission = document.querySelector('input[name="social-media-permission"]:checked').value;

        // Production
        const productionNameOfShow = document.querySelector('#show-name').value;
        const productionLengthOfProgram = document.querySelector('input[name="program-length"]:checked').value;
        const productionProducer = document.querySelector('#producer').value;
        const productionMethodToRecieve = document.querySelector('#production-receive').value;
        const productionAdditionalInfo = document.querySelector('#additional-production-info').value;

        // Billboards
        const billboardNewExisting = document.querySelector('input[name="billboard-new-existing"]:checked').value;
        const billboardGraphics = document.querySelector('input[name="billboard-graphics"]:checked').value;
        const billboardScript = document.querySelector('#billboard-graphic-name').value;
        const billboardLength = document.querySelector('#billboard-script').value;
        const billboardNameServer = document.querySelector('#billboard-runTime').value;
        const billboardAirSchedule = document.querySelector('#server-name').value;
        const billboardAirProgram = document.querySelector('#billboard-air-schedule-time').value;
        const billboardNumberOfAirings = document.querySelector('#billboard-number-airings').value;
        const billboardNumberOfBillboards = document.querySelector('#billboard-number-billboards').value;
        const billboardDueDate = document.querySelector('#billboard-due-date').value;

        // Promotions
        const promotionsOrgination = document.querySelector('#promo-origination').value;
        const promotionsRunOfSchedule = document.querySelector('#promo-ROS').value;
        const promotionsTimesPerDay = document.querySelector('#number-ROS').value;
        const promotionsAirDuringSpecificPrograms = document.querySelector('#run-during-specific-program').value;
        const promotionsTimesPerProgram = document.querySelector('#number-per-program').value;
        const promotinsAirDatesStart = document.querySelector('#air-start-date').value;
        const promotionsAirDatesEnd = document.querySelector('#air-end-date').value;
        const promotionsGraphics = document.querySelector('input[name="promo-graphic-required"]:checked').value;
        const promotionsMethodToRecieve = document.querySelector('#promo-receive').value;
        const promotionsSocialMediaPermission = document.querySelector('input[name="promo-social-media-permission"]:checked').value;
        const promotionsApproval = document.querySelector('#promo-approval').value;
        const promotionsApprovalDate = document.querySelector('#promo-approval-date').value;

        // Paid Spots
        const paidSpotPermission = document.querySelector('input[name="paid-spot"]:checked').value;
        const numberOfDifferentSpots = document.querySelector('#number-spots').value;
        const totalNumberOfAirings = document.querySelector('#total-number-airings').value;
        const nameSavedInServer = document.querySelector('#paid-spot-name').value;
        const timeSavedInServer = document.querySelector('#paid-spot-time').value;
        const numberOfAiring = document.querySelector('#paid-spot-number-airings').value;
        const paidSpotPlacements = document.querySelector('#paid-spots-placement').value;
        const paidSpotDuplicationPermission = document.querySelector('input[name="paid-spot-duplication-permission"]:checked').value;
        const paidSpotMethodToRecieve = document.querySelector('#paid-spots-receive').value;
        const paidSpotApprovedBy = document.querySelector('#paid-spots-approval').value;
        const paidSpotApprovedDate = document.querySelector('#paid-spots-approval-date').value;

        // Disclaimers
        const disclaimerExist = document.querySelector('input[name="disclaimer-exist"]:checked').value;
        const disclaimerGraphicRequired = document.querySelector('input[name="disclaimer-graphic-required"]:checked').value;
        const disclaimerGraphicName = document.querySelector('#disclaimer-graphic-name').value;
        const disclaimerScript = document.querySelector('#disclaimer-script').value;
        const disclaimerRunTime = document.querySelector('#disclaimer-runTime').value;
        const disclaimerServerName = document.querySelector('#disclaimer-server-name').value;
        const disclaimerDueDate = document.querySelector('#disclaimer-due-date').value;


        const id = document.querySelector('#id').value;

    
    
        const data = {
            id,
        soldByPerson,
        typeOfClient,
        clientCompanyName,
        clientPersonName,
        clientPersonTitle,
        clientPhone,
        clientEmail,
        copyright,
        contractSignDate,
        contractStartDate,
        contractEndDate,
        airDatesTimes,
        contractAdditionalInfo,
        webOTT: [
            {
            webCategory,
            selectVideoOnDemand,
        }
    ],
        duplication: [
            {
            persmissionToSell,
            placeInStore,
            compSelection,
            compFormat,
            fTPInstructions,
            compDueDate,
            compNumbersPerEpisode,
            compGraphicDesign,
            compAdditionalInfo
        }
    ],
        social: [{
            socialMediaPermission,

        }],
        production: [{
            productionNameOfShow,
            productionLengthOfProgram,
            productionProducer,
            productionMethodToRecieve,
            productionAdditionalInfo
        }],
        billboards: [{
            billboardNewExisting,
            billboardGraphics,
            billboardScript,
            billboardLength,
            billboardNameServer,
            billboardAirSchedule,
            billboardAirProgram,
            billboardNumberOfAirings,
            billboardNumberOfBillboards,
            billboardDueDate
        }],
        promotions: [{
            promotionsOrgination,
            promotionsRunOfSchedule,
            promotionsTimesPerDay,
            promotionsAirDuringSpecificPrograms,
            promotionsTimesPerProgram,
            promotinsAirDatesStart,
            promotionsAirDatesEnd,
            promotionsGraphics,
            promotionsMethodToRecieve,
            promotionsSocialMediaPermission,
            promotionsApproval,
            promotionsApprovalDate
        }],
        paidSpots: [{
            paidSpotPermission,
            numberOfDifferentSpots,
            totalNumberOfAirings,
            nameSavedInServer,
            timeSavedInServer,
            numberOfAiring,
            paidSpotPlacements,
            paidSpotDuplicationPermission,
            paidSpotMethodToRecieve,
            paidSpotApprovedBy,
            paidSpotApprovedDate
        }],
        disclaimer: [{
            disclaimerExist,
            disclaimerGraphicRequired,
            disclaimerGraphicName,
            disclaimerScript,
            disclaimerRunTime,
            disclaimerServerName,
            disclaimerDueDate 

        }]

    };

    if(id === '') {
        // Create Post
    http.post(serverAddy + '/api/oec', data)
        .then(console.log(data))
        .then( hideMainForms())
        //have some spinner or message and then direct to main page
        //Show Message
        .catch(console.log(data))
    } else {
         // Update Post
      http.put(serverAddy + `/api/oec/${id}`, data)
      .then(data => {
        console.log('Post updated', 'alert alert-success');
        console.log('add');
        // getPosts();
      })
      .catch(err => console.log(err));
//     }
    }


}

//Utility Functions

function contractSort() {
    const clientType = document.querySelector('#type-of-client').value.toLowerCase()
    hideForms(clientType)
}

function hideForms(typeOfShow){
    const fusion = document.querySelectorAll('div.fusion');
    const partner = document.querySelectorAll('div.partner');
    const underwriter = document.querySelectorAll('div.underwriter');


    if (typeOfShow === 'fusion') {

            hideAllDiv()
            showDiv(fusion);
    } else if
        (typeOfShow === 'partner'){
            hideAllDiv()
            showDiv(partner);
        } else if (
            typeOfShow === 'underwriter'){
                hideAllDiv()
                showDiv(underwriter);
    } else { 
        hideAllDiv();
     };


    function hideAllDiv(){
        hideDiv(fusion)
        hideDiv(partner)
        hideDiv(underwriter)
    };

};

function newContractBtn(){
    hideContracts()
    hideWeekendSection()
    ui.clearForm()
    hideForms()
    showMainForms();
};

function loadContractsBtn(){
    hideMainForms()
    hideSection(weekendPart)
    showSection(contracts);
};

function weekendScheduleBtn(){
    hideMainForms()
    hideContracts()
    showWeekendSection()
};

function showMainForms(){
    showDiv(forms)
};

function hideMainForms(){
    hideDiv(forms)
};

function showSection(section){
    section.classList.remove('collapse')
}

function hideSection(section){
    section.classList.add('collapse')
}


function hideContracts(){
    contracts.classList.add('collapse');
};

function hideWeekendSection(){
    weekendPart.classList.add('collapse');
};

function showWeekendSection(){
    weekendPart.classList.remove('collapse');
};


function showDiv(elementToMapOver){ 
    [].map.call(elementToMapOver, (el) => 
    {el.classList.remove('collapse')}
)};

function hideDiv(elementToMapOver){ 
    [].map.call(elementToMapOver, (el) => 
    {el.classList.add('collapse')}
)};



// Delete OEC
function deleteCard(e) {
    if(e.target.parentElement.classList.contains('delete')) {
      const id = e.target.parentElement.dataset.id;
      if(confirm('Are you sure You want to Delete?')) {
        http.delete(serverAddy + `/api/oec/${id}`)
          .then(data => {
            // ui.showAlert('Post removed', 'alert alert-success');
            getClients()
            loadContractsBtn();
          })
          .catch(err => console.log(err));
      }
    }
    e.preventDefault();
  }

  //Enable Edit State
  function enableEdit(e){
      if(e.target.parentElement.classList.contains('edit')){
        const id = e.target.parentElement.dataset.id;
        http.get(serverAddy + `/api/oec/${id}`)
        .then(data =>{
            //load show oec
            showMainForms()
            hideContracts()
            hideForms(data.typeOfClient.toLowerCase())
              // Fill form with data
            ui.fillForm(data);
        })
        .catch(err => console.log(err));
    }
    


      e.preventDefault();

  }

