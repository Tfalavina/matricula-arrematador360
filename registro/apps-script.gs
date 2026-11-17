// Cole este código em Extensões > Apps Script da planilha "Registro de acessos 360"
// e publique como App da Web (Executar como: Eu; Quem pode acessar: Qualquer pessoa).
var COLUNAS=['data','evento','pagina','codigo','vendedor','oferta','checkout','link','visitante','utm_source','utm_medium','utm_campaign','src'];
function doPost(e){
  var sh=SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
  if(sh.getLastRow()===0) sh.appendRow(['Data','Evento','Página','Código','Vendedor','Oferta','Checkout entregue','Link aberto','Visitante','utm_source','utm_medium','utm_campaign','src']);
  var d={}; try{ d=JSON.parse(e.postData.contents); }catch(err){}
  var row=COLUNAS.map(function(k){ return k==='data' ? (d.data?new Date(d.data):new Date()) : String(d[k]||'').slice(0,500); });
  sh.appendRow(row);
  return ContentService.createTextOutput('ok');
}
