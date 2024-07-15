// Immediately Invoked Function Expressions (IIFE)
// Global scope ke pollution ko hatane ke liye IIFE use hota hai aur IIFE immidiately execute ho jata hai


// iska syntax hai ()() pehla wala bracket funtion ke liye hai aur dusra bracket execution ke liye hai 
(function chai(){
    // yeh name IIFE HAI KYUKI ISKA NAM HAI (chai) JI 
    console.log(`DB CONNECTED`);
})();
// DB CONNECTED is output

( function aurCode() {
    // yeh name IIFE HAI KYUKI ISKA NAM HAI (aurcode)
    console.log(`DB CONNECTED TO`);
}) ();
// DB CONNECTED TO output 
// kabhi kabhi ese functions me error ata hai toh uske liye end me semi colon laga dena 


(() => {
    // non named IIFE HAI KYUKI ISKA NAME NHI HAI
   console.log(`NEW FUNCTION`)
}) ();
// NEW FUNCTION output 

((name) => {
    // non named IIFE HAI KYUKI ISKA NAME NHI HAI
    console.log(`NEW FUNCTION ${name}`)
 }) ('prayag');
//  NEW FUNCTION prayag output 