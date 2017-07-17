class TimeStamp_DateFormat {
	constructor(time){
		this.time = time;
	}

	sameSplit(str){

		let strSplit = str.split('');
		let lenSplit = strSplit.length;
		let index = '';
		let strAcum = '';
		let strFormatSplit = [];
		let num = 0;

		for(let count = 0; count <= lenSplit; count++){
			
			if(index.length != 0 && index != strSplit[count]){
				strFormatSplit[num] = strAcum
				strAcum = strSplit[count]
				num++;
			}else{
				strAcum += strSplit[count]
			}

			index = strSplit[count];
		}

		return strFormatSplit;
	}

	dateFormat(strDate){
		
		let formatSplit = this.sameSplit(strDate);
		let _time = this.time;

		const validateLength = (strTime) => strTime.length == 1 ? `0${strTime}`:`${strTime}`;  

		formatSplit = formatSplit.map(function(format){
			
			let formatReplace = '';
			
			if(format.toUpperCase() === 'YYYY'){
				formatReplace = format.replace(format, `${_time.getFullYear()}`);
			}else if(format === 'MM'){
				formatReplace = format.replace(format, validateLength(`${_time.getMonth()+1}`));
			}else if(format.toUpperCase() === 'DD'){
				formatReplace = format.replace(format, validateLength(`${_time.getDate()}`))
			}else if(format.toUpperCase() === 'HH'){
				formatReplace = format.replace(format, validateLength(`${_time.getHours()}`))
			}else if(format === 'mm'){
				formatReplace = format.replace(format, validateLength(`${_time.getMinutes()}`))
			}else if(format.toUpperCase() === 'SS'){
				formatReplace = format.replace(format, validateLength(`${_time.getSeconds()}`))
			}else {
				formatReplace = format;
			}

			return formatReplace;
		})

		return formatSplit.join('');
	}
}

export default TimeStamp_DateFormat;
