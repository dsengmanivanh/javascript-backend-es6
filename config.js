const config = {};

config.token = {};
config.token.url= 'https://entreprise.pole-emploi.fr/connexion/oauth2/access_token';

config.api ={};
config.api.client_id="PAR_innooffresv2_e490bf36c97ce99c856eae96e44b68ed2aee3afb59ffb84b9625a322c1510895";
config.api.client_secret="ed576963ceafdb097ddc085496a966754c6f28ffa1906da4e8cdb751e23dd650";
config.api.scope="api_offresdemploiv2 application_PAR_innooffresv2_e490bf36c97ce99c856eae96e44b68ed2aee3afb59ffb84b9625a322c1510895 o2dsoffre";

config.api.oldclient_id="PAR_testpe_75b7ae5f77946ccf11e4e840049e48a9623af525305bd220e282e73cb01a48e8";
config.api.oldclient_secret="ba59de484bf4bbdddf9f2e18cbb0a09810307f191b02f47e6221f8a1b75673e9";
config.api.oldscope="api_offresdemploiv1 application_PAR_testpe_75b7ae5f77946ccf11e4e840049e48a9623af525305bd220e282e73cb01a48e8 o2dsoffre";


config.offer ={};
config.offer.url="https://api.emploi-store.fr/partenaire/offresdemploi/v2/offres/search";
config.offer.oldurl="https://api.emploi-store.fr/partenaire/offresdemploi/v1/rechercheroffres";


module.exports = config;