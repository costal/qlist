import Keycloak from 'keycloak-js';

const keycloak = new Keycloak({
    url: "https://www.coremeridian.xyz/auth",
    realm: "Qlist",
    clientId: "Web",
});

keycloak.init({
    onLoad: 'login-required',

});

export default keycloak;
