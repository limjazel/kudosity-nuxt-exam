export const useNavigation = () => {
	const links = [
		{
			name: "Home",
			url: "/",
		},
		{
			name: "Products",
			url: "/products",
		},
		{
			name: "Customers",
			url: "/customers",
		},
		{
			name: "Developers",
			url: "/developers",
		},
		{
			name: "Partners",
			url: "/partners",
		},
		{
			name: "Resources",
			url: "/resources",
		},
		{
			name: "About Us",
			url: "/about-us",
		},
		{
			name: "Sign-in",
			url: "/app/sign-in",
		},
	]

	return { links }
}
