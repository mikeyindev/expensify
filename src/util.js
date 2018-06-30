export const handlePressEnterToSubmitForm = (e) => {
  // console.log(e.key);
  if (e.key === 'Enter') {
    document.getElementsByTagName('form').submit();
  }
};