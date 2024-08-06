/*
Luật tính giá nhà nghỉ ở hà nội như sau:
 - 2 tiếng đầu mỗi tiếng 70k
 - Từ tiếng thứ 2 trở đi mỗi tiếng 50k
 - Qua đêm 160k
 - Giờ checkout khi qua đêm là 8h sáng hôm sau nếu quá 8h thì khách sẽ phải trả thêm 40k mỗi giờ
Viết hàm tính số tiền khách phải trả khi vào nhà nghỉ dựa theo giờ khách vào và giờ khách ra
Biết mốc qua đêm được tính là 24h
*/

function calculateFee(checkin, checkout) {
    let checkinTime = parseFloat(checkin);
    let checkoutTime = parseFloat(checkout);
    let totalFee = 0;

    let duration = checkoutTime + (24 - checkinTime);
    if (duration >= 24) {
        duration -= 24;
    }

    if (checkinTime < 24 && checkoutTime <= 8) {
        totalFee = 160; 
        if (checkoutTime > 8) {
            totalFee += 40 * (checkoutTime - 8);
        }
    } else {
        if (duration <= 2) {
            totalFee = 70 * duration;
        } else {
            totalFee = 140;
            totalFee += 50 * (duration - 2);
        }
    }

    return totalFee;
}

let checkin = prompt("Nhập giờ checkin (từ 0 đến 24):");
let checkout = prompt("Nhập giờ checkout (từ 0 đến 24):");

let fee = calculateFee(checkin, checkout);
alert("Số tiền khách phải trả là: " + fee + "k");