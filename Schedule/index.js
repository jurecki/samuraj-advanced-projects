const select = {
    startDate: new Date("2020-10-27"),
};

Date.prototype.addDays = function(days) {
    var date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
}

function getDates(startDate, stopDate) {
    var dateArray = new Array();
    var currentDate = startDate;
    while (currentDate <= stopDate) {
        dateArray.push(new Date (currentDate));
        currentDate = currentDate.addDays(1);
    }
    return dateArray;
}

const bookedTime = (date, timeStart, timeEnd, option) => {
    
    const bookedBlocks = [];
    for(let i = timeStart; i<timeEnd; i+=0.5) {
        bookedBlocks.push(i);
    }

    const viewDays = [...document.querySelectorAll('.schedule__timeline')]

    let pickDay = viewDays.filter(days => date == days.querySelector('.schedule__title-full').textContent);

    pickDay = [...pickDay[0].querySelectorAll('.schedule__list li')]


    pickDay.forEach(item => {
        const id = item.id;
      
        for(let i=0; i < bookedBlocks.length; i++) {
            if(bookedBlocks[i]==id) {
                item.classList.add('active')
                item.classList.add(option)
            }
        }
    })
   
   
}

function init() {
    let startDate = select.startDate
    let stopDate = startDate.addDays(2);
    const dateArray = getDates(select.startDate, stopDate);
    const fullDays = document.querySelectorAll('.schedule__title-full');
    const shortDays = document.querySelectorAll('.schedule__title-short');
    
   
   
    fullDays.forEach((day,index) => day.textContent = dateArray[index].toISOString().slice(0,10))

    shortDays.forEach((day,index) => {
        switch(dateArray[index].getDay()) {
            case 0:
            day.textContent = 'Nd';
            break;
            case 1:
            day.textContent = 'Pon';
            break;
            case 2:
            day.textContent = 'Wt';
            break;
            case 3:
            day.textContent = 'Śr';
            break;
            case 4:
            day.textContent = 'Czw';
            break;
            case 5:
            day.textContent = 'Pt';
            break;
            case 6:
            day.textContent = 'So';
            break;
        }
        
    });

    bookedTime('2020-10-28', 12, 15, 'red')
    bookedTime('2020-10-29', 15, 16.5, 'blue')
    bookedTime('2020-10-27', 11, 16.5, 'yellow')
}

init()