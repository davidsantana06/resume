const xData = () => {
    return {
        data: {},
        init() {
            fetch('https://davidsantana06.github.io/resume-data-api/data/pt-br/davidsantana06.json').then(res => {
                return res.json();
            }).then(data => {
                this.data = data;
                document.getElementById('picture').setAttribute('src', data.picture);
                document.getElementById('linkedin').setAttribute('href', data.linkedin);
                document.getElementById('github').setAttribute('href', data.github);
                document.getElementById('email').setAttribute('href', `mailto:${data.email}`);
            })
        }
    }
}

const formatDatePeriod = (startDate, endDate) => {
    const isFirstCharNumber = (date) => {
        const firstChart = String(date).charAt(0);
        return !isNaN(firstChart);
    }

    const formatDate = (date) => {
        const monthNames = [
            'Jan.', 'Fev.', 'Mar.', 'Abr.', 'Mai.', 'Jun.',
            'Jul.', 'Ago.', 'Set.', 'Out.', 'Nov.', 'Dez.'
        ];
    
        const [month, year] = date.split('/');
        const monthIndex = parseInt(month, 10) - 1;
        const monthName = monthNames[monthIndex];
        return `${monthName} de ${year}`;
    }
    
    const formattedStartDate = formatDate(startDate);
    const formattedEndDate = (isFirstCharNumber(endDate)) ? formatDate(endDate) : endDate;
    return `${formattedStartDate} — ${formattedEndDate}`;
}

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));