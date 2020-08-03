export default function splitUsers(monthes, users) {

    if(!monthes[0].users.length) {    
        users.forEach(user => {
            const monthNumber = new Date(user.dob).getMonth()
            monthes[monthNumber].users.push(user)
        });

        monthes.forEach(month => {
            month.users.sort((a, b) => {
                return Date.parse(a.dob) - Date.parse(b.dob)
            })
        })
    }

    return monthes
}