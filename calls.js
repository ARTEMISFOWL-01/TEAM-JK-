function makeCall(phoneNumber, personName) {
    // Use the tel: protocol to initiate a phone call
    window.location.href = 'tel:' + phoneNumber;
    console.log('Calling ' + personName);
  }