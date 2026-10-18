import { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router';
import { Menu, X, ArrowUpRight, Compass } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';

const links = [['/', 'Home'], ['/explore', 'Explore'], ['/experiences', 'Experiences'], ['/my-journey', 'My Journey'], ['/about', 'About'], ['/contact', 'Contact']];
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  return <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 md:px-8">
    <nav className="modern-nav mx-auto flex max-w-[1440px] items-center justify-between rounded-full px-4 py-3 md:px-6">
      <Link to="/" onClick={() => setOpen(false)} className="flex shrink-0 items-center gap-2 text-[13px] font-bold tracking-[.16em] md:text-base">
        <span className="grid size-9 place-items-center rounded-full bg-[#d7bd91] text-[#12261e]"><Compass size={19}/></span>
        HIDDEN<span className="text-[#d7bd91]">LANKA.</span>
      </Link>
      <div className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/[.06] p-1 lg:flex">
        {links.map(([path,label]) => <NavLink key={path} to={path} end={path === '/'} className={({isActive}) => `relative rounded-full px-3.5 py-2.5 text-[11px] font-semibold tracking-wide transition-colors ${isActive ? 'bg-[#e8ddc8] text-[#14291e]' : 'text-white/75 hover:bg-white/10 hover:text-white'}`}>{label}</NavLink>)}
      </div>
      <Link to="/explore" className="hidden items-center gap-2 rounded-full bg-[#d7bd91] px-5 py-3 text-xs font-bold text-[#14291e] transition hover:bg-white md:flex">Explore <ArrowUpRight size={15}/></Link>
      <button type="button" aria-label={open?'Close menu':'Open menu'} aria-expanded={open} onClick={()=>setOpen(v=>!v)} className="grid size-10 place-items-center rounded-full border border-white/20 lg:hidden">{open?<X size={20}/>:<Menu size={20}/>}</button>
    </nav>
    <AnimatePresence mode="wait">{open && <motion.div key={location.pathname+'-mobile'} initial={{opacity:0,y:-15,scale:.97}} animate={{opacity:1,y:0,scale:1}} exit={{opacity:0,y:-10,scale:.97}} transition={{duration:.25}} className="modern-nav mx-auto mt-3 max-w-[1440px] rounded-[28px] p-3 lg:hidden">
      {links.map(([path,label],i)=><Link key={path} to={path} onClick={()=>setOpen(false)} className="flex items-center justify-between rounded-2xl px-5 py-4 text-sm text-white/90 transition hover:bg-white/10"><span>{String(i+1).padStart(2,'0')} <span className="ml-3">{label}</span></span><ArrowUpRight size={16}/></Link>)}
    </motion.div>}</AnimatePresence>
  </header>;
}
