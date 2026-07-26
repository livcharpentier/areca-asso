import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Calendar } from "lucide-react";

const rows2025 = [
  { d1: "Jeudi 6 NOVEMBRE", b1: "Mercredi 1er OCTOBRE 2025", d2: "Mercredi 12 NOVEMBRE", b2: "Mercredi 1er OCTOBRE 2025" },
  { d1: "Jeudi 4 DÉCEMBRE", b1: "Mardi 4 NOVEMBRE", d2: "Mercredi 10 DÉCEMBRE", b2: "Lundi 3 NOVEMBRE" },
];

const rows2026 = [
  { d1: "Jeudi 8 JANVIER", b1: "Lundi 1er DÉCEMBRE 2025", d2: "Jeudi 8 JANVIER", b2: "Lundi 1er DÉCEMBRE 2025" },
  { d1: "Jeudi 5 FÉVRIER", b1: "Vendredi 2 JANVIER", d2: "Jeudi 5 FÉVRIER", b2: "Vendredi 2 JANVIER" },
  { d1: "Jeudi 12 MARS", b1: "Lundi 2 FÉVRIER", d2: "Mercredi 11 MARS", b2: "Lundi 2 FÉVRIER" },
  { d1: "Jeudi 9 AVRIL", b1: "Lundi 2 MARS", d2: "Mercredi 8 AVRIL", b2: "Lundi 2 MARS" },
  { d1: "Jeudi 7 MAI", b1: "Mercredi 1er AVRIL", d2: "Mercredi 6 MAI", b2: "Mercredi 1er AVRIL" },
  { d1: "Jeudi 11 JUIN", b1: "Vendredi 1er MAI", d2: "Mercredi 10 JUIN", b2: "Vendredi 1er MAI" },
  { d1: "Jeudi 9 JUILLET", b1: "Lundi 1er JUIN", d2: "Mercredi 8 JUILLET", b2: "Lundi 1er JUIN" },
  { d1: "Jeudi 10 SEPTEMBRE", b1: "Mercredi 1er JUILLET", d2: "Mercredi 9 SEPTEMBRE", b2: "Mercredi 1er JUILLET" },
  { d1: "Jeudi 8 OCTOBRE", b1: "Mardi 1er SEPTEMBRE", d2: "Mercredi 7 OCTOBRE", b2: "Mardi 1er SEPTEMBRE" },
  { d1: "Jeudi 5 NOVEMBRE", b1: "Jeudi 1er OCTOBRE", d2: "Mercredi 4 NOVEMBRE", b2: "Jeudi 1er OCTOBRE" },
  { d1: "Jeudi 3 DÉCEMBRE", b1: "Lundi 2 NOVEMBRE", d2: "Mercredi 2 DÉCEMBRE", b2: "Lundi 2 NOVEMBRE" },
];

const YearBlock = ({ year, rows }: { year: string; rows: typeof rows2025 }) => (
  <div className="mb-8">
    <div className="bg-primary text-primary-foreground text-center py-2 font-bold text-lg border border-primary">
      {year}
    </div>
    <Table className="border border-border">
      <TableHeader>
        <TableRow className="bg-muted hover:bg-muted">
          <TableHead colSpan={2} className="text-center font-bold text-foreground border-r border-border">
            75, 77, 78, 91, 93, 94, 95
          </TableHead>
          <TableHead colSpan={2} className="text-center font-bold text-foreground">
            92
          </TableHead>
        </TableRow>
        <TableRow className="bg-muted/60 hover:bg-muted/60">
          <TableHead className="text-center font-semibold text-foreground border-r border-border">DATE de réunion</TableHead>
          <TableHead className="text-center font-semibold text-foreground border-r border-border">DATE BUTOIR pour le dépôt des dossiers</TableHead>
          <TableHead className="text-center font-semibold text-foreground border-r border-border">DATE de réunion</TableHead>
          <TableHead className="text-center font-semibold text-foreground">DATE BUTOIR pour le dépôt des dossiers</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {rows.map((r, i) => (
          <TableRow key={i}>
            <TableCell className="text-center border-r border-border">{r.d1}</TableCell>
            <TableCell className="text-center border-r border-border">{r.b1}</TableCell>
            <TableCell className="text-center border-r border-border">{r.d2}</TableCell>
            <TableCell className="text-center">{r.b2}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </div>
);

const RegionalCalendar = () => {
  return (
    <Card>
      <CardHeader className="text-center">
        <p className="text-xs text-muted-foreground uppercase tracking-wide">
          Préfet de la Région d'Île-de-France — DRIEETS
        </p>
        <CardTitle className="flex items-center justify-center gap-2 text-2xl">
          <Calendar className="h-6 w-6 text-primary" />
          Commission des enfants du spectacle d'Île-de-France
        </CardTitle>
        <p className="text-lg font-semibold">Calendrier des réunions</p>
      </CardHeader>
      <CardContent>
        <YearBlock year="2025" rows={rows2025} />
        <YearBlock year="2026" rows={rows2026} />
        <p className="text-sm italic underline text-center mt-4">
          Les dossiers incomplets ne sont pas présentés en commission.
        </p>
        <p className="text-xs text-muted-foreground text-right mt-2">
          Màj – 3/10/2025
        </p>
      </CardContent>
    </Card>
  );
};

export default RegionalCalendar;
