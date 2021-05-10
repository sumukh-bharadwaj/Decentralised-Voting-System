function logout()
{    
    firebase.auth().signOut();
  
    document.location.href="file:///Users/sumukh/Election/Vote-Chain%20Backup/Votechain/ui/fire%20base%20Auth/Login.html";

}
  