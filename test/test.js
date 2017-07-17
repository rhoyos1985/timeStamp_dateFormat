
const expect = require('chai').expect
const TimeStamp_DateFormat = require('..').default

describe('#TimeStamp_DateFormat', function () {
	it('Mostrar formato de fecha YYYY-MM-DD', function () {
		const date = new TimeStamp_DateFormat(new Date());
		const dateFormatTransformation = date.dateFormat('YYYY-MM-DD')
		expect(dateFormatTransformation).to.equal('2017-07-17')
	})

	it('Mostrar formato de fecha YYYY/MM/DD', function () {
		const date = new TimeStamp_DateFormat(new Date());
		const dateFormatTransformation = date.dateFormat('YYYY/MM/DD')
		expect(dateFormatTransformation).to.equal('2017/07/17')
	})

	it('Mostrar formato de fecha YYYY:MM:DD', function () {
		const date = new TimeStamp_DateFormat(new Date());
		const dateFormatTransformation = date.dateFormat('YYYY:MM:DD')
		expect(dateFormatTransformation).to.equal('2017:07:17')
	})
})