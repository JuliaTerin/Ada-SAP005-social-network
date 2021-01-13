import { onNavigate } from '../../utils/history.js';
import { getError } from '../../errors/index.js';

export const signInEmail = (email, password) => {
  const getUser = firebase.auth().signInWithEmailAndPassword(email, password);
  getUser
    .then(() => {
      onNavigate('/');
    })
    .catch(err => {
      getError(err);
    });
}

export const getGoogleProvider = () => {
  const googleProvider = new firebase.auth.GoogleAuthProvider();
  singUpProvider(googleProvider);
}

export const getFacebookProvider = () => {
  const facebookProvider = new firebase.auth.FacebookAuthProvider();
  singUpProvider(facebookProvider);
}

export const getGitHubProvider = () => {
  const githubProvider = new firebase.auth.GithubAuthProvider();
  singUpProvider(githubProvider);
}

export const logOut = () => {
  firebase.auth().signOut().then(() => { 
    onNavigate('/login')
  });
}

function singUpProvider(provider) {
  firebase.auth().signInWithPopup(provider)
  .then(() => {
  })
  .catch(err => {
    getError(err);
  });
}

export const createNewPost = (post) => {
  return firebase.firestore().collection("posts").add(post)
}

export const editPost = (postID, newPostText) => {
  return firebase.firestore().collection("posts").doc(postID).update({ text: newPostText })
}

export const deletePost = (postID) => {
  return firebase.firestore().collection("posts").doc(postID).delete()
}  



/*
firebase.auth().signInWithRedirect(provider)
function getUser(){
  firebase.auth().getRedirectResult().then((user) => {
    if(user) {
      onNavigate('/')
    }
  })  
}
*/

/*
//-------------- Fazer a validação do registro ---------------\\
 const signUp = rootElement.querySelector('#signUp');
 signUp.addEventListener("click", e => {
   const email = rootElement.querySelector("#email").value;
   const password = rootElement.querySelector("#password").value;
   if (email === "" || password === "") {
     printMessageError(errorMessageEmptyInput);
   } else {
     const promise = firebase.auth().createUserWithEmailAndPassword(email, password);
     promise
       .then(() => {
         onNavigate('/');
       }).catch(err => {
         const errorCode = err.code;
         const errorMessage = verifyErrorCode[errorCode];
         if (errorMessage == null) {
           errorMessage = err.Message;
         }
         printMessageError(errorMessage);
       });
   }
 });
 /*
 Dúvida:
 Não haver usuários repetidos (só e-mail ou nome também?).
 Definir um formato de senha (número de caracteres, strings, number, etc.).
 E inserir uma mensagem de erro, caso a mensagem não atenda aos requisitos.
 "auth/weak-password": "A senha é muito fraca.",
 */

//---------------------- POSTAR IMAGEM ---------------------\\ HE
//--------------- ADICIONAR OU EXCLUIR AMIGOS --------------\\ HE
//-------------------- PÚBLICO OU PRIVADO ------------------\\ HE
//---------------------- EDITAR PERFIL ---------------------\\ HE
//-------------- TIMELINE PERFIL PERSONALIZADA -------------\\ HE