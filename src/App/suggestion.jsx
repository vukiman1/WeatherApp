const getSuggestion = (weatherCondition) => {
    switch (weatherCondition) {
      case 'clear sky':
        return 'Trời nắng to, không có mây. Nên mang theo ô hoặc mũ!';
      case 'few clouds':
        return 'Trời nắng, ít mây. Nên mang theo ô hoặc mũ!';
      case 'scattered clouds':
        return 'Trời nhiều mây, mát mẻ. Thích hợp để ra ngoài!';
      case 'overcast clouds':
        return 'Trời nhiều mây đen, có thể sẽ mưa!';
      case 'broken clouds':
        return 'Trời ít mây, mát mẻ!';
      case 'shower rain':
        return 'Mưa rào, nên mang theo áo mưa!';
      case 'moderate rain':
        return 'Có mưa nhỏ, nên mang theo ô!';
      case 'light rain':
        return 'Có mưa, nên mang theo áo mưa!';
      case 'thunderstorm':
        return 'Mưa to có sấm chớp, hạn chế ra ngoài!';
      case 'snow':
        return 'Trời lạnh có tuyết, hạn chế ra ngoài!';
      case 'mist':
        return 'Có sương mù, hạn chế ra ngoài!';
      default:
        return '';
    }
  };
  
  export default getSuggestion;
  