function getInputValue(id)
{
    const value = document.getElementById(id);
    const convertedValue = parseInt(value);
    return convertedValue;
}
function getInputInnerText(id)
{
    const value = document.getElementById(id).innerText;
    const convertedValue = parseFloat(value);
    return convertedValue;

}