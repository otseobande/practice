const sillyObj = {
	value: 1,
	toString(){
		return this.value++;
	}
}

export default sillyObj;