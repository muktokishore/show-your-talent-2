const isMobile = navigator.userAgentData.mobile;

if(!isMobile){
    document.getElementById('mobile-controller').style.display = 'none';
}
else{
    document.getElementById("navAlert").style.display="none"
}

