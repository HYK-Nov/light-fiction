import {CheckBadgeIcon, UserCircleIcon} from "@heroicons/react/24/solid";
import {MagnifyingGlassIcon} from "@heroicons/react/24/outline";
import {useLocation, useNavigate} from "react-router-dom";

function Header() {
    const navigate = useNavigate();
    const {pathname} = useLocation();

    return (
        <header className={'bg-white border-b-2 border-orange-500 dark:bg-gray-800'}>
            <div className={'container h-20 flex justify-between items-center'}>
                <div className={'flex gap-10'}>
                    {/* 로고 */}
                    <div className={'flex items-center gap-1 cursor-pointer'} onClick={() => navigate(`/`)}>
                        <CheckBadgeIcon className={'h-8 w-8 text-orange-500'}/>
                        <p className={'font-logo text-2xl dark:text-white'}>라이트 픽션</p>
                    </div>
                    {/* 네비게이션 */}
                    <div className={'flex gap-8 items-center text-lg font-bold dark:text-white'}>
                        <p className={`${pathname.includes('best') && 'text-orange-500'} cursor-pointer`}
                           onClick={() => navigate(`/best`)}>베스트</p>
                        <p className={`${pathname.includes('latest') && 'text-orange-500'} cursor-pointer`}
                           onClick={() => navigate(`/latest`)}>최신</p>
                    </div>
                </div>

                <div className={'flex items-center gap-5'}>
                    <MagnifyingGlassIcon className={'h-8 w-8 text-black cursor-pointer dark:text-white'}/>
                    <UserCircleIcon className={'h-8 w-8 text-black cursor-pointer dark:text-white'}/>
                </div>
            </div>
        </header>
    );
}

export default Header;