function solution(date1, date2) {
    const [y1, m1, d1] = date1
    const [y2, m2, d2] = date2
    return Number(new Date(...date1) < new Date(...date2))
}