import Link from "next/link";
import { Trophy, Zap } from "lucide-react";

const Navbar = () => {
  return (
    <nav>
      <header className="bg-green-900 text-white shadow-lg rounded-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="hidden sm:block bg-orange-500 p-2 rounded-full">
                <Trophy className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold tracking-tight">
                  Kampala 7s
                </h1>
                <p className="text-green-200 text-sm">
                  Real-time rugby scores & updates
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-2 bg-orange-500 px-4 py-2 rounded-full">
              <Zap className="w-4 h-4" />
              <Link
                href={"/scorers"}
                className="font-semibold text-sm sm:text-xs"
              >
                Top Scorers
              </Link>
            </div>
          </div>
        </div>
      </header>
    </nav>
  );
};

export default Navbar;
