/*:
	@include:
		{
			"generate-random-mean-time": "generateRandomMeanTime"
		}
	@end-include

	@module-documentation:
		Generate a random port number using random mean time.
	@end-module-documentation

	@module-configuration:
		{
			"fileName": "generate-random-port-number.js",
			"moduleName": "generateRandomPortNumber",
			"authorName": "Richeve S. Bebedor",
			"isGlobal": true
		}
	@end-module-configuration
*/
generateRandomPortNumber = function generateRandomPortNumber( ){
	return ( generateRandomMeanTime( ) % 65535 ) + 49152;
};