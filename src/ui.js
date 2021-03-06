const moment = require('moment');


class UI {
  constructor(){
    //Contract Info
        this.soldByPersonInput = document.querySelector('#sold-by');
        this.typeOfClientInput = document.querySelector('#type-of-client');
        this.clientCompanyNameInput = document.querySelector('#client');
        this.clientPersonNameInput = document.querySelector('#contact-name');
        this.clientPersonTitleInput = document.querySelector('#contact-title');
        this.clientPhoneInput = document.querySelector('#contact-phone');
        this.clientEmailInput = document.querySelector('#contact-email');
        this.productionNameOfShowInput = document.querySelector('#show-name');

        this.copyrightInput = document.querySelector('input[name="copyright-license"]:checked');
        this.contractSignDateInput = document.querySelector('#contract-sign-date');
        this.contractStartDateInput = document.querySelector('#contract-start');
        this.contractEndDateInput = document.querySelector('#contract-end');
        this.airDatesTimesInput = document.querySelector('#air-dates-times');
        this.contractAdditionalInfoInput = document.querySelector('#additional-info');

        this.copyrightFillInput = document.querySelector('input[id="copyright-license-yes"]');
        this.copyrightFillNoInput = document.querySelector('input[id="copyright-license-no"]');
        this.copyrightFillBlankInput = document.querySelector('input[id="copyright-license-none"]');

        // Web OTT Indentification
        this.selectVideoOnDemandInput = document.querySelector('input[name="svod-gallery"]:checked');
        this.webCategoryInput = document.querySelector('#web-category');

        this.selectVideoOnDemandYesInput = document.querySelector('input[id="web-svod-yes"]')
        this.selectVideoOnDemandNoInput = document.querySelector('input[id="web-svod-no"]')
        this.selectVideoOnDemandBlankInput = document.querySelector('input[id="web-svod-none"]')

        // Store Duplication FTP
        this.persmissionToSellInput = document.querySelector('input[name="sell-permission"]:checked');
        this.placeInStoreInput = document.querySelector('input[name="pcn-store-permission"]:checked');
        this.compSelectionInput = document.querySelector('input[name="comps"]:checked');
        this.compFormatInput = document.querySelector('#comp-format');
        this.fTPInstructionsInput = document.querySelector('input[name="ftp-instructions"]:checked');
        this.compDueDateInput = document.querySelector('#comp-due-date');
        this.compNumbersPerEpisodeInput = document.querySelector('#comp-per-episode');
        this.compGraphicDesignInput = document.querySelector('input[name="comp-design"]:checked');
        this.compAdditionalInfoInput = document.querySelector('#additional-comp');

        this.persmissionToSellYesInput = document.querySelector('input[id="sell-permission-yes"]')
        this.persmissionToSellNoInput = document.querySelector('input[id="sell-permission-no"]')
        this.persmissionToSellBlankInput = document.querySelector('input[id="sell-permission-none"]')
        this.placeInStoreYesInput = document.querySelector('input[id="pcn-store-permission-yes"]')
        this.placeInStoreNoInput = document.querySelector('input[id="pcn-store-permission-no"]')
        this.placeInStoreBlankInput = document.querySelector('input[id="pcn-store-permission-none"]')
        this.compSelectionYesInput = document.querySelector('input[id="comps-permission-yes"]')
        this.compSelectionNoInput = document.querySelector('input[id="comps-permission-no"]')
        this.compSelectionBlankInput = document.querySelector('input[id="comps-permission-none"]')
        this.fTPInstructionsCheckInput = document.querySelector('input[id="ftp-instructions-sent"]')
        this.fTPInstructionsBlankInput = document.querySelector('input[id="ftp-instructions-none"]')
        this.compGraphicDesignYesInput = document.querySelector('input[id="comp-design-gfx-yes"]')
        this.compGraphicDesignNoInput = document.querySelector('input[id="comp-design-gfx-no"]')
        this.compGraphicDesignBlankInput = document.querySelector('input[id="comp-design-gfx-none"]')


        // Social Media
        this.socialMediaPermissionInput = document.querySelector('input[name="social-media-permission"]:checked');

        this.socialMediaPermissionYesInput = document.querySelector('input[id="social-media-permission-yes"]')
        this.socialMediaPermissionNoInput = document.querySelector('input[id="social-media-permission-no"]')
        this.socialMediaPermissionBlankInput = document.querySelector('input[id="social-media-permission-none"]')
        
        // Production
        this.productionLengthOfProgramInput = document.querySelector('input[name="program-length"]:checked');
        this.productionProducerInput = document.querySelector('#producer');
        this.productionMethodToRecieveInput = document.querySelector('#production-receive');
        this.productionAdditionalInfoInput = document.querySelector('#additional-production-info');

        this.productionLengthOfProgram30Input = document.querySelector('input[id="program-length-30"]')
        this.productionLengthOfProgram60Input = document.querySelector('input[id="program-length-60"]')
        this.productionLengthOfProgramBlankInput = document.querySelector('input[id="program-length-none"]')

        // Billboards
        this.billboardNewExistingInput = document.querySelector('input[name="billboard-new-existing"]:checked');
        this.billboardGraphicsInput = document.querySelector('input[name="billboard-graphics"]:checked');
        this.billboardScriptInput = document.querySelector('#billboard-graphic-name');
        this.billboardLengthInput = document.querySelector('#billboard-script');
        this.billboardNameServerInput = document.querySelector('#billboard-runTime');
        this.billboardAirScheduleInput = document.querySelector('#server-name');
        this.billboardAirProgramInput = document.querySelector('#billboard-air-schedule-time');
        this.billboardNumberOfAiringsInput = document.querySelector('#billboard-number-airings');
        this.billboardNumberOfBillboardsInput = document.querySelector('#billboard-number-billboards');
        this.billboardDueDateInput = document.querySelector('#billboard-due-date');

        this.billboardNewExistingNewInput = document.querySelector('input[id="billboard-new-existing-new"]')
        this.billboardNewExistingExistingInput = document.querySelector('input[id="billboard-new-existing-existing"]')
        this.billboardNewExistingBlankInput = document.querySelector('input[id="billboard-new-existing-none"]')
        this.billboardGraphicsYesInput = document.querySelector('input[id="billboard-graphics-yes"]')
        this.billboardGraphicsNoInput = document.querySelector('input[id="billboard-graphics-no"]')
        this.billboardGraphicsExistingInput = document.querySelector('input[id="billboard-graphics-existing"]')
        this.billboardGraphicsBlankInput = document.querySelector('input[id="billboard-graphics-none"]')

        // Promotions
        this.promotionsOrginationInput = document.querySelector('#promo-origination');
        this.promotionsRunOfScheduleInput = document.querySelector('#promo-ROS');
        this.promotionsTimesPerDayInput = document.querySelector('#number-ROS');
        this.promotionsAirDuringSpecificProgramsInput = document.querySelector('#run-during-specific-program');
        this.promotionsTimesPerProgramInput = document.querySelector('#number-per-program');
        this.promotinsAirDatesStartInput = document.querySelector('#air-start-date');
        this.promotionsAirDatesEndInput = document.querySelector('#air-end-date');
        this.promotionsGraphicsInput = document.querySelector('input[name="promo-graphic-required"]:checked');
        this.promotionsMethodToRecieveInput = document.querySelector('#promo-receive');
        this.promotionsSocialMediaPermissionInput = document.querySelector('input[name="promo-social-media-permission"]:checked');
        this.promotionsApprovalInput = document.querySelector('#promo-approval');
        this.promotionsApprovalDateInput = document.querySelector('#promo-approval-date');

        this.promotionsGraphicsYesInput = document.querySelector('input[id="promo-graphic-required-yes"]')
        this.promotionsGraphicsNoInput = document.querySelector('input[id="promo-graphic-required-no"]')
        this.promotionsGraphicsExistingInput = document.querySelector('input[id="promo-graphic-required-existing"]')
        this.promotionsGraphicsBlankInput = document.querySelector('input[id="promo-graphic-required-none"]')
        this.promotionsSocialMediaPermissionYesInput = document.querySelector('input[id="promo-social-media-permission-yes"]')
        this.promotionsSocialMediaPermissionNoInput = document.querySelector('input[id="promo-social-media-permission-no"]')
        this.promotionsSocialMediaPermissionBlankInput = document.querySelector('input[id="promo-social-media-permission-none"]')


        // Paid Spots
        this.paidSpotPermissionInput = document.querySelector('input[name="paid-spot"]:checked');
        this.numberOfDifferentSpotsInput = document.querySelector('#number-spots');
        this.totalNumberOfAiringsInput = document.querySelector('#total-number-airings');
        this.nameSavedInServerInput = document.querySelector('#paid-spot-name');
        this.timeSavedInServerInput = document.querySelector('#paid-spot-time');
        this.numberOfAiringInput = document.querySelector('#paid-spot-number-airings');
        this.paidSpotPlacementsInput = document.querySelector('#paid-spots-placement');
        this.paidSpotDuplicationPermissionInput = document.querySelector('input[name="paid-spot-duplication-permission"]:checked');
        this.paidSpotMethodToRecieveInput = document.querySelector('#paid-spots-receive');
        this.paidSpotApprovedByInput = document.querySelector('#paid-spots-approval');
        this.paidSpotApprovedDateInput = document.querySelector('#paid-spots-approval-date');

        this.paidSpotPermissionYesInput = document.querySelector('input[id="paid-spot-yes"]')
        this.paidSpotPermissionNoInput = document.querySelector('input[id="paid-spot-no"]')
        this.paidSpotPermissionBlankInput = document.querySelector('input[id="paid-spot-none"]')
        this.paidSpotDuplicationPermissionYesInput = document.querySelector('input[id="paid-spot-duplication-permission-yes"]')
        this.paidSpotDuplicationPermissionNoInput = document.querySelector('input[id="paid-spot-duplication-permission-no"]')
        this.paidSpotDuplicationPermissionBlankInput = document.querySelector('input[id="paid-spot-duplication-permission-none"]')

        //update paidSpotDuplicationPermissionInput

         // Disclaimers
         this.disclaimerExistInput = document.querySelector('input[name="disclaimer-exist"]:checked');
         this.disclaimerGraphicRequiredInput = document.querySelector('input[name="disclaimer-graphic-required"]:checked');
         this.disclaimerGraphicNameInput = document.querySelector('#disclaimer-graphic-name');
         this.disclaimerScriptInput = document.querySelector('#disclaimer-script');
         this.disclaimerRunTimeInput = document.querySelector('#disclaimer-runTime');
         this.disclaimerServerNameInput = document.querySelector('#disclaimer-server-name');
         this.disclaimerDueDateInput = document.querySelector('#disclaimer-due-date');

         this.disclaimerExistNewInput = document.querySelector('input[id="disclaimer-exist-new"]')
         this.disclaimerExistExistingInput = document.querySelector('input[id="disclaimer-exist-existing"]')
         this.disclaimerExistBlankInput = document.querySelector('input[id="disclaimer-exist-none"]')
         this.disclaimerGraphicRequiredYesInput= document.querySelector('input[id="disclaimer-graphic-required-yes"]')
         this.disclaimerGraphicRequiredNoInput= document.querySelector('input[id="disclaimer-graphic-required-no"]')
         this.disclaimerGraphicRequiredExisitingInput= document.querySelector('input[id="disclaimer-graphic-required-existing"]')
         this.disclaimerGraphicRequiredBlankInput= document.querySelector('input[id="disclaimer-graphic-required-none"]')

         // Calendar

         this.calendarStartDateInput = document.querySelector('#search-start-date');
         this.calendarStartTimeInput = document.querySelector('#search-start-time');
         this.calendarEndDateInput = document.querySelector('#search-end-date');
         this.calendarEndTimeInput = document.querySelector('#search-end-time');
         this.calendarTitleInput = document.querySelector('#calendar-title');
         this.calendarEpisodeInput = document.querySelector('#calendar-episode');
         this.calendarDescriptionInput = document.querySelector('#calendar-description');

 

        //Submit Button
        this.postSubmit = document.querySelector('post-submit');
        this.idInput = document.querySelector('#id');
        this.contract = document.querySelector('#contract');
        this.forState = 'add';


    }

    showClients(contracts){
      let output = '';


      contracts.forEach((contract) => {
        output +=`<div class="card mb-4" id="OEC-card">
                  <div class="card-header">
                  <a href="#" class="delete card-link" data-id="${contract._id}"><span class="text-muted">Delete</span> <i class="fas fa-times"></i></a>
                  
                  <h2 class="card-title"><span class="badge badge-info">CLIENT</span> ${contract.clientCompanyName} </h2>
                  <h4 class="card-title"><span class="badge badge-success">SHOW</span> ${contract.production[0].productionNameOfShow}</h4>
                  <h6 class="card-subtitle mb-2 text-muted d-flex"><div class="d-inline-flex"><i class="fas fa-tag"> </i>${contract.typeOfClient} </div>
                  <div class="d-inline-flex ml-4"><i class="fas fa-user"> </i>${contract.soldByPerson}</div>
                  </h6>
                  
                  
                  
                  <p class="card-text"> <span class = "badge badge-primary">START DATE</span>  ${contract.contractStartDate}
                  <span class = "badge badge-warning">END DATE</span>  ${contract.contractEndDate}
                  </p>
                  <a href="#" class="edit card-link" data-id="${contract._id}"><i class="fas fa-pencil-alt"></i></a>
                  <span class="text-muted">Edit</span>
                  
                  </div>
                  
              </div>

        `
      })
      this.contract.innerHTML = output;
    }
    
    
    // Fill form to Edit
    fillForm(data) {
      this.typeOfClientInput.value = data.typeOfClient;
      this.soldByPersonInput.value = data.soldByPerson;
      this.clientCompanyNameInput.value = data.clientCompanyName;
      this.clientPersonNameInput.value = data.clientPersonName;
      this.clientPersonTitleInput.value = data.clientPersonTitle;
      this.clientPhoneInput.value = data.clientPhone;
      this.clientEmailInput.value = data.clientEmail;
      this.productionNameOfShowInput.value= data.production[0].productionNameOfShow;//update this in future
      this.copyrightFillInput.checked = radioButton(data.copyright, 'YES');
      this.copyrightFillNoInput.checked = radioButton(data.copyright, 'NO');
      this.contractSignDateInput.value = data.contractSignDate;
      this.contractStartDateInput.value = data.contractStartDate;
      this.contractEndDateInput.value = data.contractEndDate;
      this.airDatesTimesInput.value = data.airDatesTimes;
      this.contractAdditionalInfoInput.value = data.contractAdditionalInfo;

      // Web OTT Indentification
      this.selectVideoOnDemandYesInput.checked = radioButton(data.webOTT[0].selectVideoOnDemand, 'Yes');//RADIO BUTTON
      this.selectVideoOnDemandNoInput.checked = radioButton(data.webOTT[0].selectVideoOnDemand, 'No');//RADIO BUTTON
      this.webCategoryInput.value= data.webOTT[0].webCategory;

      //Store Duplication FTP
      this.persmissionToSellYesInput.checked = radioButton(data.duplication[0].persmissionToSell,'Yes');//RADIO BUTTON=
      this.persmissionToSellNoInput.checked = radioButton(data.duplication[0].persmissionToSell,'No');//RADIO BUTTON===
      this.placeInStoreYesInput.checked = radioButton(data.duplication[0].placeInStore,'Yes' );//RADIO BUTTON=====
      this.placeInStoreNoInput.checked = radioButton(data.duplication[0].placeInStore,'No' );//RADIO BUTTON=====
      this.compSelectionYesInput.checked = radioButton(data.duplication[0].compSelection, 'Yes');//RADIO BUTTON=====
      this.compSelectionNoInput.checked = radioButton(data.duplication[0].compSelection, 'No');//RADIO BUTTON=====
      this.compFormatInput.value = data.duplication[0].compFormat;
      this.fTPInstructionsCheckInput.checked = radioButton(data.duplication[0].fTPInstructions, 'true');//RADIO BUTTON=====CHECKBOX  THIS WILL BE UPDATED ADD NAME ftp-instructions-sent
      this.compDueDateInput.value = data.duplication[0].compDueDate;
      this.compNumbersPerEpisodeInput.value = data.duplication[0].compNumbersPerEpisode;
      this.compGraphicDesignYesInput.checked = radioButton(data.duplication[0].compGraphicDesign, 'Yes');//RADIO BUTTON=====
      this.compGraphicDesignNoInput.checked = radioButton(data.duplication[0].compGraphicDesign, 'No');//RADIO BUTTON=====
      this.compAdditionalInfoInput.value= data.duplication[0].compAdditionalInfo;

      // Social Media
      this.socialMediaPermissionYesInput.checked = radioButton(data.social[0].socialMediaPermission, 'Yes');//RADIO BUTTON=====
      this.socialMediaPermissionNoInput.checked = radioButton(data.social[0].socialMediaPermission, 'No');//RADIO BUTTON=====

      // Production
      // this.productionLocationInput.value= data.production[0].productionLocation;
      this.productionLengthOfProgram30Input.checked = radioButton(data.production[0].productionLengthOfProgram, '30 Minutes');//RADIO BUTTON=====
      this.productionLengthOfProgram60Input.checked = radioButton(data.production[0].productionLengthOfProgram, '60 Minutes');//RADIO BUTTON=====
      this.productionProducerInput.value= data.production[0].productionProducer;
      this.productionMethodToRecieveInput.value= data.production[0].productionMethodToRecieve;
      this.productionAdditionalInfoInput.value= data.production[0].productionAdditionalInfo;

      //Billboards
      this.billboardNewExistingNewInput.checked = radioButton(data.billboards[0].billboardNewExisting, 'new');//RADIO BUTTON=====
      this.billboardNewExistingExistingInput.checked = radioButton(data.billboards[0].billboardNewExisting, 'existing');//RADIO BUTTON=====
      this.billboardGraphicsYesInput.checked = radioButton(data.billboards[0].billboardGraphics, 'yes');//RADIO BUTTON=====
      this.billboardGraphicsNoInput.checked = radioButton(data.billboards[0].billboardGraphics, 'no');//RADIO BUTTON=====
      this.billboardGraphicsExistingInput.checked = radioButton(data.billboards[0].billboardGraphics, 'existing');//RADIO BUTTON=====
      this.billboardScriptInput.value= data.billboards[0].billboardScript;
      this.billboardLengthInput.value= data.billboards[0].billboardLength;
      this.billboardNameServerInput.value= data.billboards[0].billboardNameServer;
      this.billboardAirScheduleInput.value= data.billboards[0].billboardAirSchedule;
      this.billboardAirProgramInput.value= data.billboards[0].billboardAirProgram;
      this.billboardNumberOfAiringsInput.value= data.billboards[0].billboardNumberOfAirings;
      this.billboardNumberOfBillboardsInput.value= data.billboards[0].billboardNumberOfBillboards;
      this.billboardDueDateInput.value= data.billboards[0].billboardDueDate;

      // Promotions
      this.promotionsOrginationInput.value= data.promotions[0].promotionsOrgination;
      this.promotionsRunOfScheduleInput.value= data.promotions[0].promotionsRunOfSchedule;
      this.promotionsTimesPerDayInput.value= data.promotions[0].promotionsTimesPerDay;
      this.promotionsAirDuringSpecificProgramsInput.value= data.promotions[0].promotionsAirDuringSpecificPrograms;
      this.promotionsTimesPerProgramInput.value= data.promotions[0].promotionsTimesPerProgram;
      this.promotinsAirDatesStartInput.value= data.promotions[0].promotinsAirDatesStart;
      this.promotionsAirDatesEndInput.value= data.promotions[0].promotionsAirDatesEnd;
      this.promotionsGraphicsYesInput.checked = radioButton(data.promotions[0].promotionsGraphics, 'yes');//RADIO BUTTON=====
      this.promotionsGraphicsNoInput.checked = radioButton(data.promotions[0].promotionsGraphics, 'no');//RADIO BUTTON=====
      this.promotionsGraphicsExistingInput.checked = radioButton(data.promotions[0].promotionsGraphics, 'existing');//RADIO BUTTON=====
      this.promotionsMethodToRecieveInput.value= data.promotions[0].promotionsMethodToRecieve;
      this.promotionsSocialMediaPermissionYesInput.checked = radioButton(data.promotions[0].promotionsSocialMediaPermission, 'Yes');//RADIO BUTTON=====
      this.promotionsSocialMediaPermissionNoInput.checked = radioButton(data.promotions[0].promotionsSocialMediaPermission, 'No');//RADIO BUTTON=====
      this.promotionsApprovalInput.value= data.promotions[0].promotionsApproval;
      this.promotionsApprovalDateInput.value= data.promotions[0].promotionsApprovalDate;

      // Paid Spots
      this.paidSpotPermissionYesInput.checked = radioButton(data.paidSpots[0].paidSpotPermission, 'yes');//RADIO BUTTON=====
      this.paidSpotPermissionNoInput.checked = radioButton(data.paidSpots[0].paidSpotPermission, 'no');//RADIO BUTTON=====
      this.numberOfDifferentSpotsInput.value= data.paidSpots[0].numberOfDifferentSpots;
      this.totalNumberOfAiringsInput.value= data.paidSpots[0].totalNumberOfAirings;
      this.nameSavedInServerInput.value= data.paidSpots[0].nameSavedInServer;
      this.timeSavedInServerInput.value= data.paidSpots[0].timeSavedInServer;
      this.numberOfAiringInput.value= data.paidSpots[0].numberOfAiring;
      this.paidSpotPlacementsInput.value= data.paidSpots[0].paidSpotPlacements;
      this.paidSpotDuplicationPermissionYesInput.checked= radioButton(data.paidSpots[0].paidSpotDuplicationPermission, 'yes'); //Radio BUTTON
      this.paidSpotDuplicationPermissionNoInput.checked= radioButton(data.paidSpots[0].paidSpotDuplicationPermission, 'no');; //Radio BUTTON
      this.paidSpotMethodToRecieveInput.value= data.paidSpots[0].paidSpotMethodToRecieve;
      this.paidSpotApprovedByInput.value= data.paidSpots[0].paidSpotApprovedBy;
      this.paidSpotApprovedDateInput.value= data.paidSpots[0].paidSpotApprovedDate;


      this.idInput.value = data._id
  


      // used to return True for Checked Radio Buttons
      function radioButton(dataValue,firstValue){
        if (dataValue === firstValue) {return true}
        else { return false };
      }

    }


    clearForm() {
      this.typeOfClientInput.value = "";
      this.productionNameOfShowInput.value= "";
      this.soldByPersonInput.value = "";
      this.clientPersonNameInput.value = "";
      this.clientCompanyNameInput.value = "";
      this.clientPersonTitleInput.value = "";
      this.clientPhoneInput.value = "";
      this.clientEmailInput.value = "";

      this.copyrightFillBlankInput.checked = true;
      this.contractSignDateInput.value = "";
      this.contractStartDateInput.value = "";
      this.contractEndDateInput.value = "";
      this.airDatesTimesInput.value = "";
      this.contractAdditionalInfoInput.value = "";

      // Web OTT Indentification
      this.webCategoryInput.value= "";
      this.selectVideoOnDemandBlankInput.checked = true;

      //Store Duplication FTP
      this.persmissionToSellBlankInput.checked= true;
      this.placeInStoreBlankInput.checked= true;
      this.compSelectionBlankInput.checked= true;
      this.compFormatInput.value= "";
      this.fTPInstructionsBlankInput.checked= true;
      this.compDueDateInput.value= "";
      this.compNumbersPerEpisodeInput.value= "";
      this.compGraphicDesignBlankInput.checked= true;
      this.compAdditionalInfoInput.value= "";

      // Social Media
      this.socialMediaPermissionBlankInput.checked= true;

      // Production
      this.productionLengthOfProgramBlankInput.checked= true;
      this.productionProducerInput.value= "";
      this.productionMethodToRecieveInput.value= "";
      this.productionAdditionalInfoInput.value= "";

      //Billboards
      this.billboardNewExistingBlankInput.checked= true;
      this.billboardGraphicsBlankInput.checked= true;
      this.billboardScriptInput.value= "";
      this.billboardLengthInput.value= "";
      this.billboardNameServerInput.value= "";
      this.billboardAirScheduleInput.value= "";
      this.billboardAirProgramInput.value= "";
      this.billboardNumberOfAiringsInput.value= "";
      this.billboardNumberOfBillboardsInput.value= "";
      this.billboardDueDateInput.value= "";

      // Promotions
      this.promotionsOrginationInput.value= "";
      this.promotionsRunOfScheduleInput.value= "";
      this.promotionsTimesPerDayInput.value= "";
      this.promotionsAirDuringSpecificProgramsInput.value= "";
      this.promotionsTimesPerProgramInput.value= "";
      this.promotinsAirDatesStartInput.value= "";
      this.promotionsAirDatesEndInput.value= "";
      this.promotionsGraphicsBlankInput.checked= true;
      this.promotionsMethodToRecieveInput.value= "";
      this.promotionsSocialMediaPermissionBlankInput.checked= true;
      this.promotionsApprovalInput.value= "";
      this.promotionsApprovalDateInput.value= "";

      // Paid Spots
      this.paidSpotPermissionBlankInput.checked= true;
      this.numberOfDifferentSpotsInput.value= "";
      this.totalNumberOfAiringsInput.value= "";
      this.nameSavedInServerInput.value= "";
      this.timeSavedInServerInput.value= "";
      this.numberOfAiringInput.value= "";
      this.paidSpotPlacementsInput.value= "";
      this.paidSpotDuplicationPermissionBlankInput.checked= true;
      this.paidSpotMethodToRecieveInput.value= "";
      this.paidSpotApprovedByInput.value= "";
      this.paidSpotApprovedDateInput.value= "";

      // Disclaimers
      this.disclaimerExistInput.value= "";
      this.disclaimerGraphicRequiredInput.value= "";
      this.disclaimerGraphicNameInput.value= "";
      this.disclaimerScriptInput.value= "";
      this.disclaimerRunTimeInput.value= "";
      this.disclaimerServerNameInput.value= "";
      this.disclaimerDueDateInput.value= "";
    }
    

}

// Changes background color based on variable
  // function colorBackground(typeOfClient) {
  //   if (typeOfClient === 'fusion'){
  //     return 'bg-success';
  //   } else if  (typeOfClient === 'paid programing'){
  //     return 'bg-info';
  //   } else if (typeOfClient === 'public affairs'){
  //     return 'bg-primary';
  //   } else {
  //     return 'bg-dark';
  //   }

 
  // }
  // convert Time
//   function convertTime(input) {
//     return moment(input, 'HH:mm').format('h:mm A');
// }

export const ui = new UI();