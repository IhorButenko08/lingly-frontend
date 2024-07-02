import Sidebar from "@/app/components/sidebar";
import StatisticElement from "@/app/components/statisticElement";
import useWindowSize from "@/app/hooks/window/useWindowSize";
import StartOverButton from "@/app/hooks/buttons/startOver";

const Overview = () => {

    const size = useWindowSize()

    return (
        <div className="bg-Background/Primary min-h-screen w-full grid grid-cols-1 md:grid-cols-7 md:grid-rows-5 gap-0 font-gilory">
        {size.width > 770 && <Sidebar />}
        <div className="col-span-6 row-span-5">
          <div className="w-full">
            <div className="mx-8 my-16 flex justify-between lg:mx-24 md:mx-24 sm:mx-8">
              <div className="text-white md:text-header font-bold sm:text-header/sm">Good Job, Ihor</div>
              <StartOverButton size={size.width} />
            </div>
          </div>
          <div className="w-full">
            <div className="mx-24 grid grid-cols-4 grid-rows-1 gap-4">
                <StatisticElement upHeader="Total" downHeader="Rounds" content="12"/>
                <StatisticElement upHeader="Overall" downHeader="Time" content="45:01"/>
                <StatisticElement upHeader="Accuracy" downHeader="Rate" content="34%"/>
                <StatisticElement upHeader="Average" downHeader="Speed" content="5/m"/>
              </div>
            </div>
          </div>
        </div>
    )
}

export default Overview