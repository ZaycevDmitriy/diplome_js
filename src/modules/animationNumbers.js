const animationNumbers = () => {
  const numberOrdersElem = document.getElementById('num1'),
    yearElem = document.getElementById('num3'),
    arrivalTimeElem = document.getElementById('num2'),
    staffMembersElem = document.getElementById('num4'),
    headerWrapper = document.querySelector('.header-wrapper'),
    numSection = document.querySelector('.num-section'),
    numSectionTop = numSection.offsetTop,
    heightHeaderWrapper = headerWrapper.offsetHeight;

  const date = new Date();
  const year = date.getFullYear();
  const YearCreation = 2008;
  const yearsWorking = year - YearCreation;

  const animateCount = function(total, elem) {
    let count = 0;
    const speed = 200;
    const inc = total / speed;

    const timerId = setInterval(() => {
      if (total > count) {
        count += inc;
        elem.textContent = Math.round(count);
      } else {
        count = 0;
        clearInterval(timerId);
      }
    }, 10);
  };

  const animateWrapper = (total, elem) => {

    let isThrottled = false;

    return () => {
      if (isThrottled) {
        return;
      }
      isThrottled = true;
      animateCount(total, elem);

      setTimeout(() => {
        isThrottled = false;
      }, 3000);
    };
  };

  const animateNumberOrders = animateWrapper(80, numberOrdersElem);
  const animateArrivalTime = animateWrapper(45, arrivalTimeElem);
  const animateStaffMembers = animateWrapper(33, staffMembersElem);
  const animateYear = animateWrapper(yearsWorking, yearElem);

  const startAnimate = () => {
    const scrollTop = window.scrollY;

    if (scrollTop >= numSectionTop - heightHeaderWrapper) {
      animateNumberOrders();
      animateArrivalTime();
      animateStaffMembers();
      animateYear();
    }
  };

  window.addEventListener('scroll', startAnimate);
};

export default animationNumbers;
