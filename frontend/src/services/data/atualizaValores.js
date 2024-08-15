export const atualizaValores = (e, funcao) => {
    const valor = e.target.value
    funcao(valor);
}