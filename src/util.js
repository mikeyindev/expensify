import { history } from './routers/AppRouter';

export const handlePressEnterToSubmitForm = (e) => {
  // console.log(e.key);
  if (e.key === 'Enter') {
    e.preventDefault();
    document.getElementsByTagName('form').submit();
  }
};

// Press 'n' key to add new expense on the DashboardPage
export const handleHotkey = (e) => {
  const searchBox = document.getElementById('input--searchbox');
  // console.log(document.activeElement === searchBox);
  // console.log(history.location.pathname);
  if (history.location.pathname === '/dashboard' && document.activeElement !== searchBox && e.key === 'n') {
    e.preventDefault();
    history.push('/create');
  }
}