// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
	export interface DefaultTheme {
		borderRadius?: string;
		name?: string;
		colors: {
			main: string;
			secondary: string;
		};
	}
}
