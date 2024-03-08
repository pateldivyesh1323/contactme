import { LoginLink, RegisterLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export default async function Navbar() {

    const {
        getAccessToken,
        getBooleanFlag,
        getFlag,
        getIdToken,
        getIntegerFlag,
        getOrganization,
        getPermission,
        getPermissions,
        getStringFlag,
        getUser,
        getUserOrganizations,
        isAuthenticated
    } = getKindeServerSession();

    console.log(await getAccessToken());
    console.log(await getBooleanFlag("bflag", false));
    console.log(await getFlag("flag", "x", "s"));
    console.log(await getIntegerFlag("iflag", 99));
    console.log(await getOrganization());
    console.log(await getPermission("eat:chips"));
    console.log(await getPermissions());
    console.log(await getStringFlag("sflag", "test"));
    console.log(await getUser());
    console.log(await getUserOrganizations());
    console.log(await isAuthenticated());

    return (
        <div className="bg-orange-cust h-20 text-white-cust flex items-center justify-between p-10 font-anta font-bold text-2xl shadow-xl shadow-[#ff51013b]">
            <div>ContactMe</div>
            <div className="flex gap-4 text-sm items-center">
                <RegisterLink
                    postLoginRedirectURL="/home"
                    className="bg-white p-2 text-orange-cust rounded hover:bg-[#eaeaea] transition-all duration-200">Sign up</RegisterLink>
                <LoginLink postLoginRedirectURL="home">Sign in</LoginLink>
            </div>
            <div>
                <LogoutLink>Log out</LogoutLink>
            </div>
        </div>
    )
}