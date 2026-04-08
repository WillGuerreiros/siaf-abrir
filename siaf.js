chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "abrir-com-selecao",
    title: "abrir siaf",
    contexts: ["selection"]
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "abrir-com-selecao") {
    const textoSelecionado = encodeURIComponent(info.selectionText);
    const url = `http://siaf/Cadastro_Consultar_Cliente.asp?cod_cliente=${textoSelecionado}`;
    chrome.tabs.create({ url });
  }
});
